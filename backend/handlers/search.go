package handlers

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

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
