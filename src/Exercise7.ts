/*INICIO
ED: h e m, minutos, inteiros

	Ler (h, m)
	minutos<-h*60+m
	Escrever (Os minutos passados desde as 0h são “, minutos)
FIM*/

function conversionToMinutes(hours: number, minutes:number): number{
    let minutesPassed = hours * 60 + minutes;
    return minutesPassed;
}

console.log("The minutes passed since 0h are ", conversionToMinutes(5,30));
