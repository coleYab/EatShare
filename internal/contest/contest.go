package contest

import (
	"fmt"
	"time"

	"github.com/coleYab/codef/internal/utils"
)

type Contest struct {
	Name         string
	ProblemCount int
	Language     string
	Template     string
	CreatedAt    time.Time
}

func New(name string, problemCount int, lang string, templateFile string) *Contest {
	return &Contest{
		Name:         name,
		ProblemCount: problemCount,
		Language:     lang,
		Template:     templateFile,
		CreatedAt:    time.Now(),
	}
}

func (c *Contest) Create() error {
	// dateFormatted := utils.FormatDate(c.CreatedAt)

	dirName := fmt.Sprintf("%v_%v", c.Name, "contest")
	if err := utils.CreateDirectory(dirName); err != nil {
		return err
	}

	if err := c.createProblems(dirName); err != nil {
		return err
	}

	return nil
}

func (c *Contest) createProblems(dirName string) error {
	starterCode, err := utils.ReadFile(c.Template)
	if err != nil {
		return err
	}

	for i := range min(c.ProblemCount, 26) {
		cur := string(rune('a' + i))
		probDir := fmt.Sprintf("%v/%v", dirName, cur)
		if err := utils.CreateDirectory(probDir); err != nil {
			return err
		}

		filePath := fmt.Sprintf("%v/sol.%v", probDir, c.Language)
		if err := utils.CreateFile(filePath, starterCode); err != nil {
			return err
		}
	}

	return nil
}
