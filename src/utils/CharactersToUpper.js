function charactersToUpper(array) {
  if (array.length === 0 || !Array.isArray(array)) {
    return 'No data';
  }

  const result = array
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(', ');
  return result;
}

export default charactersToUpper;
