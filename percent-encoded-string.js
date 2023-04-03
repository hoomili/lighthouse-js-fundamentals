const urlEncode = function(text) {
  let encodedUrl = "";
  for(let i = 1; i < (text.length - 1); i++){
    if (text[i] !== " "){
      encodedUrl += text[i];
    } else {
      encodedUrl += "%20";
    }
  }
  return encodedUrl;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));