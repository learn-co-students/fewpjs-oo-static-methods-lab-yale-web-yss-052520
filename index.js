class Formatter {
  //add static methods here 
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = string.split(" ")

    arrayOfWords.map( word => {
      if (arrayOfWords.indexOf(word) == 0) {
        result.push( word.charAt(0).toUpperCase() + word.slice(1))
      } else if (!exceptions.includes(word)) {
        result.push( word.charAt(0).toUpperCase() + word.slice(1))
      } else {
        result.push(word)
      }
    })

    return result.join(" ")
  }
}