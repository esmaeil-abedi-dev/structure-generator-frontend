#! /usr/bin/env node

const inquirer = require('inquirer')
const { questions } = require('./constants/questions')
const componentCreator = require('./utils/componentCreator')
const structureCreator = require('./utils/structureCreator')
const { srcPath } = require('./constants/path.constants')

const structureConfigPath = `${srcPath}/@templateGenerator/.structuregenerator.config.js`
const structureConfig = require(structureConfigPath)

const run = async () => {
  const { language, structure } = await inquirer.prompt(questions);

  const { type, subDirectories, parentDirectories } = structureConfig.directories[structure]
  const componentTemplate = structureConfig.templatePath[structure]

  if (type === 'structure') {
    structureCreator(structure, subDirectories, language)
  } else if (type === 'component') {
    componentCreator(structure, parentDirectories, componentTemplate, language)
  }
}

run()


