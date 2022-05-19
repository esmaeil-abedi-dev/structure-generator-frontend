# structure-generator-frontend

This repository can generate a base structure directory and sub directory with files for structure or component directory

## Config File

We have 2 type of structure base directories:

1) `type: 'structure'`:
        It will make all subdirectories if `isCreateThisDirectory: true` and files based on given name if `isCreateSubFilesForThisDirectory: true`

2) `type: 'component'`:
        Based on components that you select screens or components it will make you directory and file based on parent directory you select on cli

### template path

You can add your own template for component base files on `@templateGenerator/templates/` and add your own template name for each one