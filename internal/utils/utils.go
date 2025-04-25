package utils

import (
	"fmt"
	"log"
	"os"
	"time"
)

func FormatDate(t time.Time) string {
	return fmt.Sprintf("%v-%v-%v", t.Day(), t.Month(), t.Year())
}

func ReadFile(path string) (string, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}

	return string(content), nil
}

func CreateDirectory(path string) error {
	return os.Mkdir(path, 0755)
}

func CreateFile(path string, content string) error {
	log.Printf("%v - file created\n", path)
	return os.WriteFile(path, []byte(content), 0755)
}
