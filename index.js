//Organizar aqui todos os elementos Dom
import cipher from './cipher.js';

let btnEncode = document.getElementById("encode");
btnEncode.addEventListener("click", encode);


let btnDecode = document.getElementById("decode");
btnDecode.addEventListener("click", decode);


function encode(){
	
	let string = document.getElementById("texto").value.toUpperCase();
	let offset = Number(document.getElementById("chave").value);
	let resultado = cipher.encode(offset, string);
	document.getElementById("resultado").innerHTML = resultado;	
	
}

function decode(){
	
	let string= document.getElementById("texto").value.toUpperCase();
	let offset = Number(document.getElementById("chave").value);
	let resultado = cipher.decode(offset, string);
	document.getElementById("resultado").innerHTML = resultado;
}

