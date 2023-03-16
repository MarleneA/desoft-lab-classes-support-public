/*INICIO
ED: x, resultado_x real

Ler (x)
resultado_x<-(x*x)-(3*x)+1
Escrever (“O resultado de x é”, resultado_x)

FIM*/

function caculateExpression(x: number): number{
    
    let result = (x * x) - (3 * x) + 1;
    return(result);
}

console.log("The result of the expression is " + caculateExpression(300));