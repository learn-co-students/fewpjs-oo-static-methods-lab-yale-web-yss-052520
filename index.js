class Formatter {
  static capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    const arr = string.split(" ")
    const newArr = arr.map(word => word.replace(/[^A-Za-z0-9-']+/g, ''))
    return newArr.join(" ")
  }

  static titleize(string) {
    const arr = string.split(" ")
    const noCap = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const newArr = arr.map((word, index) => index == 0 || !noCap.includes(word) ? Formatter.capitalize(word) : word)
    return newArr.join(" ")
  }
}