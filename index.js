class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1)
  }

  static sanitize(string) {
    return string.replace(/[^-, 'A-Za-z0-9']+/g, '');
  }

  static titleize(string) {
    let words = string.split(" ")
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    for (let i in words) {
      if ((!exceptions.includes(words[i])) || i == 0) words[i] = this.capitalize(words[i])
    }
    return words.join(" ")
  }
}