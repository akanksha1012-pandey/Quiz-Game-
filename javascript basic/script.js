function removeVowelsandspaces(string){
  var vowels = string.replace(/[aieou\s]+/gi, '');
  return vowels;
  
};
 
var mystring = removeVowelsandspaces('my name is akanksha');
alert(mystring);
