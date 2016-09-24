package main

import (
	"net/http"
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/engine/standard"
	"github.com/labstack/echo/middleware"
)

// Standard handler
func handler(w http.ResponseWriter, r *http.Request) {
	println("standard handler")
}

func main() {
	e := echo.New()

	os.Setenv("REQ-MODE", "development")
	if os.Getenv("REQ-MODE") == "development" {
		e.Use(middleware.Logger())
		e.SetDebug(true)
	}

	e.Use(middleware.Recover())
	e.Use(middleware.Gzip())

	e.GET("/", index)
	e.GET("/healthcheck", healthcheck)

	e.Static("/assets", "../assets")

	e.Run(standard.New(":4000"))
}
