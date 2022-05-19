const fileExtensionMaker = (type, language) => {
  if (language === 'JavaScript') {
    return 'js';
  } else if (type === 'util') {
    return 'ts';
  }

  return 'tsx';
};

module.exports = {
  fileExtensionMaker
};