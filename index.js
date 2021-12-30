class Formatter {
  // Write a method static capitalize that takes in a string and capitalizes the first letter.
  static capitalize(string) {
		return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }
  
  // Write a method static sanitize that takes in a string and removes all non-alphanumeric 
// characters except for dashes, single quotes and spaces.
  static sanitize (string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  
  // Write a method static titleize that takes in a string and capitalizes all words in a 
// sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes 
// the first word.
  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}

// You are going to write three static methods in the Formatter class. 
// Write your code in the index.js file. Let the tests guide you through the process.

// Write a method static capitalize that takes in a string and capitalizes the first letter.
// Write a method static sanitize that takes in a string and removes all non-alphanumeric 
// characters except for dashes, single quotes and spaces.
// Write a method static titleize that takes in a string and capitalizes all words in a 
// sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes 
// the first word.