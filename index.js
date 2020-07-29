class Formatter {
  static capitalize (word) {
    // const arr = word.split('')
    // arr[0] = arr[0].toUpperCase()
    // return arr.join('')
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize( word ) {
    return word.replace( /[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(input) {
    const ignore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let out = []
    let wordsArr = input.split(' ')
    for (let i = 0; i < wordsArr.length; i++) {
      if (i == 0) {
        out.push( this.capitalize(wordsArr[i]) )
      } else if ( ignore.includes(wordsArr[i]) ) {
        out.push(wordsArr[i])
      } else {
        out.push( this.capitalize(wordsArr[i]) )
      }
    }
    return out.join(' ')
  }

}
