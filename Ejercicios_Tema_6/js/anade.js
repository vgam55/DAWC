function anade() 
{
	alert("aaaaa");
	var span=document.getElementById("adicional");
	var enlace1=document.getElementById("enlace");
	span.className="visible";
	enlace1.className="oculto";
}

	enlace=document.getElementById("enlace");
	enlace.addEventListener("click", anade)