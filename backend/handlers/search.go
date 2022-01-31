package handlers

import (
	"backend/database"
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/spf13/cast"
)

type AddPropertyRequest struct {
	Purpose     string `form:"purpose" json:"purpose" binding:"required"`
	Type        string `form:"type" json:"type" binding:"required"`
	Location    string `form:"location" json:"location" binding:"required"`
	Prop_title  string `form:"Prop_title" json:"prop_title" binding:"required"`
	Description string `form:"description" json:"description" binding:"required"`
	Price       string `form:"price" json:"price" binding:"required"`
	Area        string `form:"area" json:"area" binding:"required"`
	Noofbed     string `form:"no_of_bed" json:"no_of_bed" binding:"required"`
	Noofbath    string `form:"no_of_bath" json:"no_of_bath" binding:"required"`
}
type searchFilters struct {
	forRentOrSell string
	PriceFrom     float64
	PriceTo       float64
	AreaFrom      float64
	AreaTo        float64
	Page          int64
	Limit         int64
	SortBy        string
	SortOrder     string
}

type propertyResult struct {
	Title         string  `json:"title"`
	Description   string  `json:"description"`
	Area          float64 `json:"area"`
	Price         float64 `json:"price"`
	ContactNumber string  `json:"contact_number"`
	AgentName     string  `json:"agent_name"`
}

func SearchListing(c *gin.Context) {
	searchFilters := searchFilters{
		forRentOrSell: c.GetString("f"),
		PriceFrom:     c.GetFloat64("price_from"),
		PriceTo:       c.GetFloat64("price_to"),
		AreaFrom:      c.GetFloat64("area_from"),
		AreaTo:        c.GetFloat64("area_to"),
		Page:          c.GetInt64("page"),
		Limit:         c.GetInt64("limit"),
		SortBy:        c.GetString("sort_by"),
		SortOrder:     c.GetString("sort_order"),
	}

	fmt.Printf("Search listing api called with filters %v", searchFilters)

	// Get list of properties from database
	results := make([]propertyResult, 0)

	// Some sample results for now but this needs to be fetched from database

	results = append(results, propertyResult{
		Title:         "A very beautiful Villa",
		Description:   "This property is blaa blaa blaa .... ",
		Area:          20.1,
		Price:         1000,
		ContactNumber: "03333333333",
		AgentName:     "Mohsin",
	})
	results = append(results, propertyResult{
		Title:         "Another beautiful Villa",
		Description:   "This property is also blaa blaa blaa .... ",
		Area:          20.1,
		Price:         1000,
		ContactNumber: "03333333333",
		AgentName:     "Mohsin",
	})

	c.JSON(http.StatusOK, results)
}
func AddProperty(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get(Userkey)

	addpropertyDetails := AddPropertyRequest{}

	if err := c.BindJSON(&addpropertyDetails); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to parse Json"})
	}

	// Validate form input
	if strings.Trim(addpropertyDetails.Purpose, " ") == "" || strings.Trim(addpropertyDetails.Type, " ") == "" || strings.Trim(addpropertyDetails.Location, " ") == "" || strings.Trim(addpropertyDetails.Prop_title, " ") == "" || strings.Trim(addpropertyDetails.Description, " ") == "" || strings.Trim(addpropertyDetails.Price, " ") == "" || strings.Trim(addpropertyDetails.Area, " ") == "" || strings.Trim(addpropertyDetails.Noofbed, " ") == "" || strings.Trim(addpropertyDetails.Noofbath, " ") == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Parameters can't be empty"})
		return
	}

	db := database.GetDatabase()
	if strings.Trim(addpropertyDetails.Purpose, " ") == "rent" {
		_, err := db.Exec("INSERT INTO RENTAL_PROPERTY( `prop_type`, `prop_location`, `prop_title`, `prop_area`, `prop_description`, `prop_rent`,  `no_of_bedrooms`, `no_of_baths`, `prop_owner_id`) VALUES (?,?,?,?,?,?,?,?,?) ", addpropertyDetails.Type, addpropertyDetails.Location, addpropertyDetails.Prop_title, cast.ToFloat64(addpropertyDetails.Area), addpropertyDetails.Description, cast.ToFloat64(addpropertyDetails.Price), cast.ToFloat64(addpropertyDetails.Noofbed), cast.ToFloat64(addpropertyDetails.Noofbath), user)
		if err != nil {
			log.Print("Error in database query", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Database failure"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Successfully added property"})

	} else {
		_, err := db.Exec("INSERT INTO SALE_PROPERTY( `prop_type`, `prop_location`, `prop_title`, `prop_area`, `prop_description`, `prop_price`,  `no_of_bedrooms`, `no_of_baths`, `prop_images`, `prop_owner_id`) VALUES (?,?,?,?,?,?,?,?) ", addpropertyDetails.Type, addpropertyDetails.Location, addpropertyDetails.Prop_title, cast.ToFloat64(addpropertyDetails.Area), addpropertyDetails.Description, addpropertyDetails.Price, cast.ToFloat64(addpropertyDetails.Noofbed), cast.ToFloat64(addpropertyDetails.Noofbath), user)
		if err != nil {
			log.Print("Error in database query", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Database failure"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Successfully added property"})

	}

}
