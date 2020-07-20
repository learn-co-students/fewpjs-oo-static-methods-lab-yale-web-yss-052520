class Formatter {
  //add static methods here
  static capitalize(input) {
    return input[0].toUpperCase()+input.slice(1)
  }
  static sanitize(input) {
    return input.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(input) {
    return this.capitalize(this.sanitize(input.split(' ').map(e => 
      ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"].includes(e) 
      ? e : this.capitalize(e)).join(' ')))
  }
}