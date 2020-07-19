class Formatter {
  //add static methods here

  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1, str.length)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(str){
    return Formatter.capitalize(str.split(" ").map(word => {
      if (!["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"].includes(word)) {
        return Formatter.capitalize(word)
      }
      else {
        return word
      }
    }).join(" "))
  }
}