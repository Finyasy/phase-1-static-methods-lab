class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    // takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces
    return str.replace(/[^a-zA-Z0-9\s-']/g, '').replace(/\s+/g, ' ');
  }
  
  static titleize(str) {
    let word = str.split(' ');
    let exceptions = ['the','a', 'an', 'but', 'for', 'at', 'by', 'and', 'from', 'of'];
    //Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from;
    // and always capitalizes the first word.
    word[0] = word[0].substring(0,1).toUpperCase() + word[0].substring(1, word[0].length);
    let newStr = word.map(str => {
      if (exceptions.includes(str)) {
        return str;
      } else {
        return Formatter.capitalize(str);
      }
    })
    return newStr.join(' ');
  }
}
