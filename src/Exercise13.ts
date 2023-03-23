/*INICIO
ED: a= 60, b= 40, cosY= 60, c;

    c= RaizQ (a^2+ b^2 – 2 (a * b) * cosY);
    Escrever (“A distância entre trabalhadores é de  “, c);	
FIM*/


export function calculateWorkersDistance(): number {
    let cableA = 60;
    let cableB = 40;
    let cosY = Math.cos((Math.PI / 180) * 60);
    let workersDistance = Math.sqrt(((Math.pow(cableA, 2) + Math.pow(cableB, 2)) - (2 * cableA * cableB)) * cosY);
    return (workersDistance);
}

