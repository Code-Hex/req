package main

import (
	"net/http"

	"github.com/labstack/echo"
)

func index(c echo.Context) error {
	return c.String(http.StatusOK, "/")
}

func healthcheck(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{
		"message": "I love the world :D",
	})
}
