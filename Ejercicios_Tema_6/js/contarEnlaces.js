var enlaces;
var numEnlaces;

// Numero de enlaces de la pagina
function numEnlacesTotal()
{
	enlaces=document.getElementsByTagName("a");
	numEnlaces= enlaces.length;
	alert("En esta página hay "+numEnlaces+" en total");
}

	// Direccion del penultimo enlace
function direccion()
{
	enlaces=document.getElementsByTagName("a");
	alert(enlaces[enlaces.length-2].href);
}	
	// Numero de enlaces que apuntan a http://prueba
function numLinkPrueba()
{
	var cont=0;
	enlaces=document.getElementsByTagName("a");
	for(var i=0; i<enlaces.length;i++)
	{
		if (enlaces[i].href=="http://prueba/")
		{
			cont++;
		}
	}
	alert("En esta página hay "+cont+" enlaces que apuntan a prueba");
}
	// Numero de enlaces del tercer p�rrafo
function links3ParrafoC()
{
	var parrafo3=document.getElementsByTagName("p");
	var enlaces=parrafo3[2].getElementsByTagName("a");
	alert("aaa");
	alert("En el tercer parrafo hay "+enlaces.length+" enlaces");
}
document.getElementById("btnNumTotalEnlaces").addEventListener("click",numEnlacesTotal);
document.getElementById("btnDirection").addEventListener("click",direccion);
document.getElementById("btnNumEnlacesPrueba").addEventListener("click",numLinkPrueba);
document.getElementById("btnEnlacesTerP").addEventListener("click",links3ParrafoC);