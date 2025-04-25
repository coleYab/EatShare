package config

import "fmt"

type Config struct {
	TemplateDir  string
	TemplateFile string
	ContestLang  string
	BuildFile    string
}

func (c *Config) GetTemplateFile() string {
	return fmt.Sprintf("%v/file.%v", c.TemplateDir, c.ContestLang)
}

func New(dir string, file string) *Config {
	return &Config{
		TemplateDir:  dir,
		TemplateFile: file,
	}
}
