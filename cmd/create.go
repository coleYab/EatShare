/*
Copyright © 2025 NAME HERE <EMAIL ADDRESS>
*/
package cmd

import (
	"fmt"
	"log"
	"strconv"
	"strings"

	"github.com/coleYab/codef/internal/config"
	"github.com/coleYab/codef/internal/contest"
	"github.com/spf13/cobra"
)

var cfg config.Config

// createCmd represents the create command
var createCmd = &cobra.Command{
	Use:   "create",
	Short: "create a contest files bootstapped with template",
	Long: `This command is used to create a file that will bootstrap 
			the contest files with the templates`,
	Args: func(cmd *cobra.Command, args []string) error {
		if len(args) < 2 || strings.Trim(args[0], " ") == "" {
			return fmt.Errorf("contest name and problem count is not provided")
		}

		if args[0] == "" {
			return fmt.Errorf("contest name cannot be empty")
		}

		num, err := strconv.Atoi(args[1])
		if err != nil {
			return fmt.Errorf("the problem count has to be an integer")
		}

		if num <= 0 {
			return fmt.Errorf("the problems cannot be negative")
		}

		return nil
	},
	RunE: func(cmd *cobra.Command, args []string) error {
		name := args[0]
		problemCnt, _ := strconv.Atoi(args[1])
		contest := contest.New(name, problemCnt, cfg.ContestLang, cfg.GetTemplateFile())
		err := contest.Create()
		if err != nil {
			return err
		}

		log.Println("created the problems have fun!!")
		return nil
	},
}

func init() {
	rootCmd.AddCommand(createCmd)
	rootCmd.PersistentFlags().StringVarP(&cfg.ContestLang, "lang", "l", "py", "Lanauge you wish to use for the contest.")
	rootCmd.PersistentFlags().StringVarP(&cfg.TemplateDir, "path", "p", "/home/nba_yeabsira/.competitive/templates", "Where is the template")
}
