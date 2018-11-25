var numRamdon=0;   //guarda el número que hay que acertar
var intento=0;   //número que intenta adivinar el que se ha metido antes
var indice=1;	 //número de intentos
var acertado=false; //Indica si se acerto o no.
numRandom=prompt("Introduce el número a acertar (entre 1 y 10)");
do
{ 
	intento=prompt("Intenta acertar un número entre 1 y 10");
	indice++;
	if(numRamdon==intento) 
	{
		acertado=true;
	}
}
while(indice<=10 && acertado==false)

if(acertado)
{
	alert("Has acertado");
}
else
{
    alert("No has acertado");
}
