# codef

It is a silly project(lolz).
**Boostrap your competitive programming contests with structured boilerplate code.**

`codef` is a command-line tool designed to streamline the setup process for competitive programming contests, particularly for platforms like Codeforces. It automates the creation of well-organized directories and populates them with basic file templates for your preferred programming language, allowing you to focus on solving problems right away.

## Usage

``` bash
codef [command]
```

## Available Commands

* **`completion`**: Generates the autocompletion script for your specified shell (e.g., bash, zsh). This allows for faster command input.

* **`create <contest_name> <problem_count>`**: Creates a new contest directory named `<contest_name>` and populates it with subdirectories (e.g., `A`, `B`, `C`, ...) for each problem up to `<problem_count>`. Each problem directory will contain a pre-configured template file in your chosen language.

* **`help [command]`**: Provides detailed help information about any specific `codef` command.

## Flags

These flags can be used with the `codef` command to customize its behavior:

* `-h`, `--help`: Displays the general help message for `codef`.
* `-l`, `--lang string`: Specifies the programming language you wish to use for the contest. This determines the type of template file created for each problem. The default language is `py` (Python).
* `-p`, `--path string`: Defines the directory where `codef` looks for template files. By default, it uses `/home/nba_yeabsira/.competitive/templates`. You can customize this path to use your own templates.
* `-t`, `--toggle`: Displays a help message (the specific content of this flag's output isn't detailed in the provided information).

## Examples

### Creating a contest for 3 problems using the default Python template:

```bash
codef create a2sv-weekly 3
```

This command will create a directory named `round123` with the following structure (assuming default settings):

```
a2sv-weekly_contest/
├── a/
│   └── sol.py
├── b/
│   └── sol.py
└── c/
    └── sol.py
```

Each `.py` file will contain a basic Python template. 

### Creating a contest for 4 problems using a C++ template:

```bash
codef create contest456 4 -l cpp
```

This will create a `contest456` directory with the folder structure and `sol.cpp` files, populated with a C++ template.

### Creating a contest using a custom template directory:

```bash
codef create div2-round 2 -p /path/to/my/custom/templates -l java
```

### Getting help for the `create` command:

```bash
codef create --help
```

or

```bash
codef help create
```

## Configuration

`codef` relies on template files located in the directory specified by the `-p` flag (default: `/home/nba_yeabsira/.competitive/templates`). To customize the boilerplate code for your preferred languages, you can modify or add template files in this directory. The filenames of the templates should ideally match the language extension (e.g., `py` for Python, `cpp` for C++, `java` for Java).

## Contributing

This is my personal tool if you like it fork it then do whatever you want with it idk and also I will accept PR. 

## License

This project is under MIT License.

