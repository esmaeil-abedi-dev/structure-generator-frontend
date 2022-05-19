function capitalizeFirstLetter(word) {
  const splittedWord = word.split("-");
  let result = splittedWord[0];

  for (let counter = 1; counter < splittedWord.length; counter++) {
    const capitalize = splittedWord[counter].charAt(0).toUpperCase() + splittedWord[counter].slice(1);
    result += capitalize;
  }

  return result;
}

module.exports = {
  capitalizeFirstLetter
};