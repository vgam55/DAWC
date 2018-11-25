var imagen=1;
var vuelta=0; //devuelve un valor que luego usaremos para parar el setInterval en 
				  //la función mostrarTodos()
function adelante()
{
	
	imagen++;
	if(imagen>5)
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
		imagen=6;
	}
    url="img/sombrero"+imagen+".jpg";
    document.getElementById("imagen").src=url;
}

function mostrarTodos()
{
	var id = setInterval(function(){
        adelante();
        if(imagen == 5) 
        {
            clearInterval(id);
        }
    }, 1000)
}

var elemento1= document.getElementById("siguiente");
var elemento2= document.getElementById("anterior");

elemento1.addEventListener("click",adelante);
elemento2.addEventListener("click",atras);
document.getElementById("todos").addEventListener("click",mostrarTodos);
