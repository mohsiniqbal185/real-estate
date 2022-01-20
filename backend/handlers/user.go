package handlers

import (
	"backend/database"
	"database/sql"
	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"strings"
)

type LoginRequest struct {
	UserName string `form:"username" json:"username" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}

func Profile(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get(Userkey)
	// TODO: get full profile from db
	c.JSON(http.StatusOK, gin.H{"user": user})
}

// Login is a handler that parses a Json and checks for specific data
func Login(c *gin.Context) {
	session := sessions.Default(c)
	loginDetails := LoginRequest{}

	if err := c.BindJSON(&loginDetails); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to parse Json"})
	}

	// Validate form input
	if strings.Trim(loginDetails.UserName, " ") == "" || strings.Trim(loginDetails.Password, " ") == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Parameters can't be empty"})
		return
	}

	// Check for username and password match, usually from a database

	db := database.GetDatabase()
	validPassword := ""
	err := db.QueryRow("select password from user where username=?", loginDetails.UserName).Scan(&validPassword)
	if err != nil && err != sql.ErrNoRows {
		log.Print("Error in database query", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database failure"})
		return
	} else if err == sql.ErrNoRows || validPassword != loginDetails.Password {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid Credentials"})
		return
	}

	// Save the username in the session
	session.Set(Userkey, loginDetails.UserName)
	if err := session.Save(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save session"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Successfully authenticated user"})
}

func Signup(context *gin.Context) {
	// TODO: implement this
}

func Logout(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get(Userkey)
	if user == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid session token"})
		return
	}
	session.Delete(Userkey)
	if err := session.Save(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save session"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Successfully logged out"})
}
