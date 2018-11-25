var miFormulario=document.getElementById("form1");
var mensaje="Las opciones elegidas son: \n";
function mostrar()
{
	for (var i=0; i<miFormulario.elements.length; i++)
	{
		if (miFormulario.elements[i].checked)
		{
			mensaje=mensaje+"\t *"+miFormulario.elements[i].value+"\n";
		}
	}
	alert(mensaje);
}

document.getElementById("btnEnviar").addEventListener("click", mostrar);