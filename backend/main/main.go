package main

import (
	"backend/database"
	"backend/handlers"
	"log"
	"net/http"

	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
)

func main() {

	if err := database.InitializeDatabase(false); err != nil {
		log.Fatal("Failed to initialize database", err)
	}

	r := engine()
	r.Use(gin.Logger())
	if err := engine().Run(":8080"); err != nil {
		log.Fatal("Unable to start:", err)
	}

	defer func() {
		_ = database.CloseDatabase()
	}()
}

func engine() *gin.Engine {

	r := gin.New()
	r.Use(CORSMiddleware())
	r.Use(sessions.Sessions("mysession", sessions.NewCookieStore([]byte("arandomsecretforsessioncookiesencryption"))))
	r.POST("/login", handlers.Login)
	r.POST("/signup", handlers.Signup)
	r.GET("/logout", handlers.Logout)

	r.POST("/adminLogin", handlers.AdminLogin)
	r.POST("/adminLogout", handlers.AdminLogout)
	user := r.Group("/user")
	user.Use(AuthRequired)
	{
		// Add all the handlers for the authenticated user
		user.POST("/addproperty", handlers.AddProperty)
		user.GET("/profile", handlers.Profile)
		user.GET("/status", status)
	}

	listing := r.Group("/listing")
	{
		// Since the listing does not require login, all handlers can be set here
		listing.GET("/search", handlers.SearchListing)
	}

	admin := r.Group("/admin")
	admin.Use(AdminAuthRequired)
	{
		// Add all handlers that are accessible to admin only
		admin.POST("/profile", handlers.AdminProfile)
		admin.GET("/status", status)
	}

	return r
}

// AuthRequired is a simple middleware to check the session
func AuthRequired(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get(handlers.Userkey)
	if user == nil {
		// Abort the request with the appropriate error code
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}
	// Continue down the chain to handler etc
	c.Next()
}

// AdminAuthRequired is a simple middleware to check the session
func AdminAuthRequired(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get(handlers.AdminKey)
	if user == nil {
		// Abort the request with the appropriate error code
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}
	// Continue down the chain to handler etc
	c.Next()
}

func status(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"status": "You are logged in"})
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(200)
			return
		}

		c.Next()
	}
}
