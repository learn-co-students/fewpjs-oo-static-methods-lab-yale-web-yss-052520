class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']/g, "")
  }

  static titleize(string){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let split = string.split(" ");
    split[0] = this.capitalize(split[0]);
    for (let i = 1; i < split.length; i++){
      split[i] = (exceptions.includes(split[i])) ? split[i] : this.capitalize(split[i])
    }
    return split.join(" ");
  }
}