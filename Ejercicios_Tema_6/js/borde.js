
function verde()
{
	var foto=document.getElementById("imagen1");
	foto.style.border='10px solid green';	
}

function rojo()
{
	var foto=document.getElementById("imagen1");
	foto.style.border='5px solid red';
}

var verde1=document.getElementById("btnAceptar");
verde1.addEventListener("click", verde);
var rojo1=document.getElementById("btnAceptar1");
rojo1.addEventListener("click", rojo);