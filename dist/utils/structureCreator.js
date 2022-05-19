const fs = require('fs/promises');

const {
  existsSync,
  constants
} = require('fs');

const path = require('path');

const inquirer = require('inquirer');

const {
  capitalizeFirstLetter
} = require('../helper/string');

const {
  srcPath
} = require('../constants/path.constants');

const {
  fileExtensionMaker
} = require('../helper/fileExtensionMaker');

const structureCreator = async (structure, subDirectories, language) => {
  const {
    name
  } = await inquirer.prompt([{
    name: "name",
    message: "Enter your structure name (use kebab case like: job-post):"
  }]);
  const camelCaseName = capitalizeFirstLetter(name);
  const structurePath = path.join(srcPath, structure);
  const isStructureDirectoryExists = existsSync(structurePath, constants.F_OK);

  if (!isStructureDirectoryExists) {
    await fs.mkdir(structurePath);
  }

  const subStructurePath = path.join(structurePath, camelCaseName);

  try {
    await fs.mkdir(subStructurePath);

    for (const [k, v] of Object.entries(subDirectories)) {
      const fileExtension = fileExtensionMaker(v.type, language);

      if (v.isCreateThisDirectory) {
        await fs.mkdir(path.join(subStructurePath, k));

        if (v.isCreateSubFilesForThisDirectory) {
          await fs.writeFile(path.join(subStructurePath, `${k}/${name}.${k}.${fileExtension}`), "");
        }
      }
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = structureCreator;