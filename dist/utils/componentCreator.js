const fs = require('fs/promises');

const path = require('path');

const inquirer = require('inquirer');

const {
  srcPath
} = require('../constants/path.constants');

const {
  fileExtensionMaker
} = require('../helper/fileExtensionMaker');

const componentCreator = async (structure, parentDirectory, componentTemplate, language) => {
  let [parent] = parentDirectory;

  if (parentDirectory.length > 1) {
    ({
      parent
    } = await inquirer.prompt([{
      type: "list",
      name: "parent",
      message: "Choose the parent directory",
      choices: parentDirectory
    }]));
  }

  const componentPath = path.join(srcPath, parent ? parent : structure);
  let componentDirectories = await fs.readdir(componentPath);
  const {
    directory
  } = await inquirer.prompt([{
    type: "list",
    name: "directory",
    message: "Choose your directory",
    choices: componentDirectories
  }]);
  let newDirectoryBasePath = path.join(componentPath, directory);

  if (structure === 'screens') {
    newDirectoryBasePath = path.join(newDirectoryBasePath, structure);
  }

  const {
    name
  } = await inquirer.prompt([{
    name: "name",
    message: "Enter your screen name "
  }]);
  const newScreenDirectory = path.join(newDirectoryBasePath, name);
  const templateScreenPath = path.join(srcPath, '@templateGenerator/templates', componentTemplate);
  await fs.mkdir(newScreenDirectory);
  let template = await fs.readFile(templateScreenPath, "utf-8");
  template = template.replace(new RegExp(/screen-name/gm), name);
  const fileExtension = fileExtensionMaker('component', language);
  await fs.writeFile(path.join(newScreenDirectory, `/${name}.${fileExtension}`), template);
  await fs.writeFile(path.join(newScreenDirectory, `/${name}.module.scss`), "");
};

module.exports = componentCreator;