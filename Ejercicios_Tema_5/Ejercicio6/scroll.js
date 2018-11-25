
var doScroll;
function recortar()
{
	var cadena=document.getElementById("parrafo").innerHTML
	var largo=cadena.length;
	document.getElementById("parrafo").innerHTML=cadena.slice(1, largo);
}

var hacerScroll=function()
{
	doScroll=setInterval(recortar,1500);
}

function endScroll()
{
	clearInterval(doScroll);
}

var btnIniciar=document.getElementById("btnIniciar");
var btnFinalizar=document.getElementById("btnFinalizar");
btnIniciar.addEventListener("click", hacerScroll);
btnFinalizar.addEventListener("click",endScroll);
