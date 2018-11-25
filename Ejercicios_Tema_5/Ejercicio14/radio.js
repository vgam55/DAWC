var radio1=document.getElementsByName("procesador");
var radio2=document.getElementsByName("so");
var eleccion="Se han elegido las siguientes opciones: ";

function mostrar()
{
	var i;
	var salida="Las opciones elegidas han sido: \n";
	for(i=0; i<radio1.length; i++)
	{
		if(radio1[i].checked)
		{
			salida=salida+" "+radio1[i].value+"\n";
		}
	}

	for(i=0; i<radio2.length; i++)
	{
		if(radio2[i].checked)
		{
			salida=salida+" "+radio2[i].value+"\n";
		}
	}
	alert(salida);
}
document.getElementById("formulario1").addEventListener("submit", mostrar);