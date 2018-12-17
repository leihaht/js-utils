// capitalize on a word
const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.substr(1)
}

// capitalize on every words
const capitalizeEveryWord = (string) => {
  return string.split(' ')
    .map( s => capitalizeWord(s))
    .join(' ')
}
