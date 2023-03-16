/*INICIO
ED: vsom=1224.000, seg=3600, trovoada, inteiro
intertempo, distancia, real   

Escrever (“Introduza intervalo de tempo entre a trovoada e o relâmpago”)
Ler (intertempo)
distancia<-(vsom*intertempo)/seg
Escrever (“A distância a que se encontra a trovoada é “, distancia)
FIM*/


function calculateDistanceOfThunderstorm(intertime: number): number{
    let vsound=1224;
    let onehourinseconds=3600;
    let distance =((vsound * intertime)/onehourinseconds)*1000;
    //Posso declarar toda a formula na mesma variavel ou atribuir outra como: let distanceMeters= distanceKm*1000;
    return distance;
}


console.log("The distance of a Thunderstorm is " + calculateDistanceOfThunderstorm(12) + " meters");

