package database

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

var globalDatabaseConnection *sql.DB

func InitializeDatabase(initDb bool) error {
	multiSqlParam := "false"
	databaseName := dbName
	if initDb {
		multiSqlParam = "true"
		databaseName = "mysql"
	}
	db, err := sql.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?multiStatements=%s", dbUser, dbPassword, dbHost, dbPort, databaseName, multiSqlParam))
	if err != nil {
		return err
	}
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(5)

	globalDatabaseConnection = db
	return nil
}

func CloseDatabase() error {
	if globalDatabaseConnection != nil {
		return globalDatabaseConnection.Close()
	}
	return nil
}

func GetDatabase() *sql.DB {
	return globalDatabaseConnection
}
