const {
  programmingLanguage
} = require('./programming-language');

const {
  srcPath
} = require('../constants/path.constants');

const structureConfigPath = `${srcPath}/@templateGenerator/.structuregenerator.config.js`;

const structureConfig = require(structureConfigPath);

const structure = Object.keys(structureConfig.directories).map(key => key);
const questions = [{
  type: "list",
  name: "language",
  message: "Choose your programming language",
  choices: programmingLanguage
}, {
  type: "list",
  name: "structure",
  message: "Choose your structure",
  choices: structure
}];
module.exports = {
  questions
};