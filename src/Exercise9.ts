/*INICIO

ED: distancia_m= 42195, tempo_m=14530, tempo_z=3900, km, distancia_z_m, distancia_z_km, velocidade media, real

distancia_z_m<-(distancia_m*tempo_z)/tempo_m
Escrever (“A distância percorrida pelo Zé é %f   metros”, distancia_z_m)
distancia_z_km=<-(1*1000)/velocidade_media
Escrever (“A distância percorrida pelo Zé é   km”, distancia_z_km)

FIM*/

export function calculateDistanceOfRunner(): number {
    let distanceManel = 42195;
    let timeManel = 14530;
    let timeZe = 3900;
    let distancekmsZe = ((distanceManel * timeZe) / timeManel) / 1000;

    return (distancekmsZe);
}

console.log("Zé runned " + calculateDistanceOfRunner() + "km");


