
const cipher = {

  encode: (offset, string) => {
    
    if(offset == "" || offset <= 0 || string == "") {

      throw TypeError("Preencha os campos corretamente!!");
  
      }
    
    let result = "";
    
    for (var i  = 0; i  < string.length; i ++) {
      let ascii = string.charCodeAt(i); 
      let newAscii = (((ascii - 65) + offset) % 26) + 65;
      let letterEncode = String.fromCharCode(newAscii);
      result += letterEncode;
    }
    return result;
   
  },

  decode: (offset, string) => {

    if(offset == "" || offset <= 0 || string == "") {

    throw TypeError("Preencha os campos corretamente!!")
  }

    let result = "";

    for (var i  = 0; i  < string.length; i ++) {
      let ascii = string.charCodeAt(i);
      let newAscii = (((ascii + 65) - offset) % 26) + 65;
      let letterDecode = String.fromCharCode(newAscii);
      result += letterDecode;
    }
    return result;
  }
}
export default cipher;