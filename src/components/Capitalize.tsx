// This function makes any word capitalized

function Capitalize(word: string) {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizedWord;
}

export default Capitalize;
