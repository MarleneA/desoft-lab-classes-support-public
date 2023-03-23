/*INICIO
ED: d, vo=0, a=9.8, t, real

Ler (t)
D<-0*t+9.8*(t*t)/2
Escrever (“A distância percorrida pela pedra é  “, d)

FIM*/

export function calculateBuildingHeight(timeSeconds: number): number {
    let distance = 0 * timeSeconds + 9.8 * Math.pow(timeSeconds, 2) / 2;

    return (distance);

};
