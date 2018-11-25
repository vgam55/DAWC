function add() 
{
    var counter = 0;
    function sumar()
    {
    	return counter++;
    }
    return sumar;
};
function mostrar()
{
	document.getElementById("resultado").innerHTML=add();
}
var boton=document.getElementById("Sumar");
boton.addEventListener("click", mostrar);

