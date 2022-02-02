package handlers

import (
	"backend/database"
	"database/sql"
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
	ForRentOrSell string
	PriceFrom     float64
	PriceTo       float64
	AreaFrom      float64
	AreaTo        float64
}

type propertyResult struct {
	Id           int64   `json:"id"`
	Type         string  `json:"type"`
	Location     string  `json:"location"`
	Title        string  `json:"title"`
	Area         float64 `json:"area"`
	Price        float64 `json:"price"`
	Description  string  `json:"description"`
	NoOfBedRooms float64 `json:"bedroom"`
	NoOfBaths    float64 `json:"bathroom"`
	Image        string  `json:"imgsrc"`
	OwnerId      string  `json:"owner_id"`
}

/*imgsrc:image1,
  price:'5 Crore',
  title: 'Bahria Hills Town Villa',
  location:'Bahria Hills Bahria Town Karachi Pakistan',
  area:'500 sqft',
  bedroom:'5 bedroon',
  bathroom:'4 bathroon',*/

func SearchListing(c *gin.Context) {
	queryParams := c.Request.URL.Query()
	searchFilters := searchFilters{
		ForRentOrSell: queryParams.Get("f"),
		PriceFrom:     cast.ToFloat64(queryParams.Get("price_from")),
		PriceTo:       cast.ToFloat64(queryParams.Get("price_to")),
		AreaFrom:      cast.ToFloat64(queryParams.Get("area_from")),
		AreaTo:        cast.ToFloat64(queryParams.Get("area_to")),
	}

	fmt.Printf("Search listing api called with filters %v", searchFilters)

	// Get list of properties from database
	results := make([]propertyResult, 0)
	db := database.GetDatabase()

	query := "select sale_prop_Id, prop_type, prop_location, prop_title, prop_area, prop_description, prop_price, no_of_bedrooms, no_of_baths, prop_images, prop_owner_id from sale_property where 1=1 "
	if searchFilters.ForRentOrSell == "rent" {
		query = "select rental_prop_id, prop_type, prop_location, prop_title, prop_area, prop_description, prop_rent, no_of_bedrooms, no_of_baths, prop_images, prop_owner_id  from rental_property where 1=1 "
	}

	// Price from filters
	if searchFilters.PriceFrom > 0 && searchFilters.ForRentOrSell == "rent" {
		query += " and prop_rent >" + cast.ToString(searchFilters.PriceFrom)
	}
	if searchFilters.PriceFrom > 0 && searchFilters.ForRentOrSell == "sale" {
		query += " and prop_price >" + cast.ToString(searchFilters.PriceFrom)
	}

	// Price to filters
	if searchFilters.PriceTo > 0 && searchFilters.ForRentOrSell == "rent" {
		query += " and prop_rent <" + cast.ToString(searchFilters.PriceTo)
	}
	if searchFilters.PriceTo > 0 && searchFilters.ForRentOrSell == "sale" {
		query += " and prop_price <" + cast.ToString(searchFilters.PriceTo)
	}

	// Area from filters
	if searchFilters.AreaFrom > 0 {
		query += " and prop_area >" + cast.ToString(searchFilters.AreaFrom)
	}
	// Area to filters
	if searchFilters.AreaTo > 0 {
		query += " and prop_area <" + cast.ToString(searchFilters.AreaTo)
	}

	rows, err := db.Query(query)
	if err != nil {
		log.Print(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database failure"})
		return
	}

	for rows.Next() {
		var (
			propId           int64
			propType         sql.NullString
			propLocation     sql.NullString
			propTitle        sql.NullString
			propArea         sql.NullFloat64
			propPrice        sql.NullFloat64
			propDescription  sql.NullString
			propNoOfBedRooms sql.NullFloat64
			propNoOfBaths    sql.NullFloat64
			propImage        sql.NullString
			propOwnerId      sql.NullString
		)
		err := rows.Scan(&propId, &propType, &propLocation, &propTitle, &propArea, &propDescription, &propPrice, &propNoOfBedRooms, &propNoOfBaths, &propImage, &propOwnerId)
		if err != nil {
			log.Print(err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Database failure"})
			return
		}
		results = append(results, propertyResult{
			Id:           propId,
			Type:         propType.String,
			Location:     propLocation.String,
			Title:        propTitle.String,
			Area:         propArea.Float64,
			Description:  propDescription.String,
			Price:        propPrice.Float64,
			NoOfBedRooms: propNoOfBedRooms.Float64,
			NoOfBaths:    propNoOfBaths.Float64,
			Image:        propImage.String,
			OwnerId:      propOwnerId.String,
		})

	}

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
	if strings.Trim(addpropertyDetails.Purpose, " ") == "Rent" {
		_, err := db.Exec("INSERT INTO RENTAL_PROPERTY( `prop_type`, `prop_location`, `prop_title`, `prop_area`, `prop_description`, `prop_rent`,  `no_of_bedrooms`, `no_of_baths`, `prop_owner_id`) VALUES (?,?,?,?,?,?,?,?,?) ", addpropertyDetails.Type, addpropertyDetails.Location, addpropertyDetails.Prop_title, cast.ToFloat64(addpropertyDetails.Area), addpropertyDetails.Description, cast.ToFloat64(addpropertyDetails.Price), cast.ToFloat64(addpropertyDetails.Noofbed), cast.ToFloat64(addpropertyDetails.Noofbath), user)
		if err != nil {
			log.Print("Error in database query", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Database failure"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Successfully added property"})

	} else {
		_, err := db.Exec("INSERT INTO SALE_PROPERTY( `prop_type`, `prop_location`, `prop_title`, `prop_area`, `prop_description`, `prop_price`,  `no_of_bedrooms`, `no_of_baths`, `prop_owner_id`) VALUES (?,?,?,?,?,?,?,?,?) ", addpropertyDetails.Type, addpropertyDetails.Location, addpropertyDetails.Prop_title, cast.ToFloat64(addpropertyDetails.Area), addpropertyDetails.Description, addpropertyDetails.Price, cast.ToFloat64(addpropertyDetails.Noofbed), cast.ToFloat64(addpropertyDetails.Noofbath), user)
		if err != nil {
			log.Print("Error in database query", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Database failure"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Successfully added property"})

	}

}
