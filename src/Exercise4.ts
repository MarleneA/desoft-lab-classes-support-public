/*INICIO
ED: a, b, perímetro, real

Ler (a, b)
perimetro<-(a*2)+(b*2)
Escrever (“O perímetro do retangulo é “, perimetro)
FIM*/


function calculatePerimeter(height:number, width:number): [number]{
    let perimeter=(height * 2)+(width *2);
    return [perimeter];
}

console.log("The size of the perimeter is ", calculatePerimeter(10, 20));
