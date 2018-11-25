function aniadirFila()
{
	var btn=document.getElementById("btnAniadir");
	var tabla=document.getElementById("tabla");
	var fila=document.createElement("tr");
	var celda;
	var contenido;
	for(var i=0; i<2;i++)
	{
		celda=document.createElement("td");
		contenido=document.createTextNode("aaaa "+i);
		celda.appendChild(contenido);
		fila.appendChild(celda);
	}
	tabla.appendChild(fila);
	document.body.appendChild(tabla);
	document.body.appendChild(btn);
}
document.getElementById("btnAniadir").addEventListener("click",aniadirFila);