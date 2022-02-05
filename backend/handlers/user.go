package handlers

import (
	"backend/database"
	"database/sql"
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
)

type LoginRequest struct {
	UserName string `form:"username" json:"username" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}

type SignupRequest struct {
	FirstName string `form:"firstname" json:"firstname" binding:"required"`
	LastName  string `form:"lastname" json:"lastname" binding:"required"`
	UserName  string `form:"username" json:"username" binding:"required"`
	Password  string `form:"password" json:"password" binding:"required"`
	Contact   string `form:"contact" json:"contact" binding:"required"`
}

func Profile(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get(Userkey)
	firstName := session.Get(UserFirstName)
	lastName := session.Get(UserLastName)
	c.JSON(http.StatusOK, gin.H{"user": user, "firstname": firstName, "lastname": lastName})
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
	firstName := ""
	lastName := ""
	err := db.QueryRow("select firstname, lastname ,password from user where id=?", loginDetails.UserName).Scan(&firstName, &lastName, &validPassword)
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
	session.Set(UserFirstName, firstName)
	session.Set(UserLastName, lastName)
	if err := session.Save(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save session"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Successfully authenticated user"})
}

func Signup(c *gin.Context) {
	signupDetails := SignupRequest{}

	if err := c.BindJSON(&signupDetails); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to parse Json"})
	}

	// Validate form input
	if strings.Trim(signupDetails.UserName, " ") == "" || strings.Trim(signupDetails.Password, " ") == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Parameters can't be empty"})
		return
	}

	db := database.GetDatabase()
	existingusername := ""
	err := db.QueryRow("select id from user where id=? ", signupDetails.UserName).Scan(&existingusername)
	if err != nil && err != sql.ErrNoRows {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database Error"})
		return
	} else if existingusername != "" {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User already exists"})
		return
	}

	_, err = db.Exec("INSERT INTO USER(id,firstname,lastname,password,contact) VALUES (?,?,?,?,?) ", signupDetails.UserName, signupDetails.FirstName, signupDetails.LastName, signupDetails.Password, signupDetails.Contact)

	if err != nil {
		log.Print("Error in database query", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database failure"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Successfully registered user"})
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
