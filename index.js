class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, '')
  }

  static titleize(string) {
    let newString = string.split(' ').slice(1)
    return string.split(' ')[0].capitalize + newString.map(word => {
      if (word != "a" || word != "an" || word != "but" || word != "of" || word != "and" || word != "for" || word != "at" || word != "by" || word != "from") {
        word.capitalize 
      }
    }).join(' ')
  }
}