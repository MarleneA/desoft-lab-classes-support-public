/*INICIO
ED: celsius, fahrenheit real
	
	Ler (celsius)
	fahrenheit<- 32+(9/5)x celsius
	Escrever (A temperatura em Farenheit é “, fahrenheit)
FIM*/

function convertTofahrenheit(celsius: number): (number){
    let fahrenheit = 32 + (9/5) * celsius;
    return (fahrenheit);
}

console.log("The temperature in Farenheit is ", convertTofahrenheit(25));