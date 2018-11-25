var imagen=1;
var url="sombrero";
function adelante()
{
	imagen++;
	if(imagen>6)
	{
		imagen=1;
	}
    url="img/sombrero"+imagen+".jpg";
    document.getElementById("imagen").src=url;
}

function atras()
{
	imagen--;
	if(imagen==0)
	{
		imagen=1;
	}
    url="sombrero"+imagen+".jpg";
    document.getElementById("imagen").src=url;
}

var elemento1= document.getElementById("siguiente");
var elemento2= document.getElementById("anterior");

elemento1.addEventListener("click",adelante);
elemento2.addEventListener("click",atras);
