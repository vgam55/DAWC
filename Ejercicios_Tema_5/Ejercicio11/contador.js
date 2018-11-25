var elemento = document.forms[0].elements[1];

function contenedor(evento) 
{
    var maxChars=parseInt(document.forms[0].elements[0].value);
    if(maxChars<=elemento.value.length)
    {
    	evento.preventDefault();
    }
    else
    {
        document.forms[0].elements[2].value=elemento.value.length.toString();
    }
} 

elemento.addEventListener("keypress",contenedor);