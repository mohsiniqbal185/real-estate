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

func AdminProfile(c *gin.Context) {
	session := sessions.Default(c)
	admin := session.Get(AdminKey)
	// TODO: get full profile from db
	c.JSON(http.StatusOK, gin.H{"admin": admin})
}

// AdminLogin is a handler that parses a Json and checks for specific data
func AdminLogin(c *gin.Context) {
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
	err := db.QueryRow("select password from admin where username=?", loginDetails.UserName).Scan(&validPassword)
	if err != nil && err != sql.ErrNoRows {
		log.Print("Error in database query", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database failure"})
		return
	} else if err == sql.ErrNoRows || validPassword != loginDetails.Password {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid Credentials"})
		return
	}

	// Save the username in the session
	session.Set(AdminKey, loginDetails.UserName)
	if err := session.Save(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save session"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Successfully authenticated user"})
}

func AdminLogout(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get(AdminKey)
	if user == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid session token"})
		return
	}
	session.Delete(AdminKey)
	if err := session.Save(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save session"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Successfully logged out"})
}
