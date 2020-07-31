class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let sentence = string.split(' ')
    
    sentence = sentence.map(word => {
      if (['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the'].indexOf(word) > -1) {
        return word
      } else {
        return Formatter.capitalize(word)
      }
    })

    sentence[0] = Formatter.capitalize(sentence[0])

    sentence = sentence.join(' ')

    return sentence
  }

}