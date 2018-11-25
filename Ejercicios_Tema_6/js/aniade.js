function ponerLi()
{
	var btn=document.getElementById("btnAceptar")
	var ul=document.getElementById("lista");
	var li=document.createElement("li");
	var contenido=document.createTextNode("Lorem Ipsum Australia");
	li.appendChild(contenido);
	ul.appendChild(li);
	
	document.body.appendChild(ul);
	document.body.appendChild(btn);

}
var btnAceptar= document.getElementById("btnAceptar");
btnAceptar.addEventListener("click", ponerLi);