package main

import (
	"backend/database"
	"io/ioutil"
	"log"
)

// Set this to true when schema changes
const dropDatabaseFirst bool = false

func main() {
	if err := database.InitializeDatabase(true); err != nil {
		log.Fatalln("Failed to initialize db", err)
	}
	defer func() {
		_ = database.CloseDatabase()
	}()

	db := database.GetDatabase()
	if dropDatabaseFirst {
		_, err := db.Exec("drop database realEstate;")
		if err != nil {
			log.Fatalln("Failed to drop database", err)
		}
	}

	file, err := ioutil.ReadFile("initialize.sql")
	if err != nil {
		log.Fatalln("Failed to read initialization file", err)
		return
	}
	_, err = db.Exec(string(file))
	if err != nil {
		log.Fatalln("Failed to run init scripts", err)
	}

	log.Println("Init db ran successfully")

}
