var listaPro=document.getElementById("procesador");
var listaSO=document.getElementById("SO");
function mostrar()
{
	var salida="Las opciones elegidas son: \n";
	var indicePro=listaPro.selectedIndex;
	var indiceSO=listaSO.selectedIndex;
	salida=salida+listaPro.options[indicePro].value+"\n";
	salida=salida+listaSO.options[indiceSO].value+"\n";
	alert(salida);
}
document.getElementById("btnEnviar").addEventListener("click",mostrar);