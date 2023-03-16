/*INICIO
ED: c1, c2, hipotenusa_quadrado, real

Ler (c1, c2)
hipotenusa_quadrado<-(c1*c1)+(c2*c2)
Escrever (“O valor da hipotenusa é “, hipotenusa_quadrado)
FIM*/

function calculateHypotenuse(cateto1: number, cateto2:number): [number]{
    let somaCatetos = Math.pow(cateto1, 2)+ Math.pow(cateto2, 2);
    let hypotenuse = Math. sqrt(somaCatetos);
    return [hypotenuse];
}

console.log("Hypotenuse ", calculateHypotenuse(2, 5));