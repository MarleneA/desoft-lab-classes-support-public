/*INICIO

ED: distancia_m= 42195, tempo_m=14530, tempo_z=3900, km, distancia_z_m, distancia_z_km, velocidade media, real

distancia_z_m<-(distancia_m*tempo_z)/tempo_m
Escrever (“A distância percorrida pelo Zé é %f   metros”, distancia_z_m)
distancia_z_km=<-(1*1000)/velocidade_media
Escrever (“A distância percorrida pelo Zé é   km”, distancia_z_km)

FIM*/

function calculateDistanceOfRunner(): number{
    let distanceManel = 42195;
    let timeManel= 14530;
    let timeZe = 3900;
    let distanceMetersZe = ((distanceManel * timeZe) / timeManel) / 1000;
    
    return (distanceMetersZe);
}

console.log("Zé runned " + calculateDistanceOfRunner().toFixed(2) + "km");


