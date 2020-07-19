class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.substr(1)
  }

  static sanitize(str) {
    return str.replace(/[^-, 'A-Za-z0-9']+/g, '');
  }

  static titleize(str) {
    let words = str.split(" ")
    const keyWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    for (let i in words) {
      if ((!keyWords.includes(words[i])) || i == 0) words[i] = this.capitalize(words[i])
    }
    return words.join(" ")
  }
}