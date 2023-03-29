/*INICIO (numero: INTEIRO)
ED: digito1, digito2, digito3 INTEIRO
SE (numero <100 OU numero >999) ENTÃO
ESCREVER(“Número não tem 3 dígitos”)
digito1 <- -1
SENÃO
digito3 <- numero MOD 10
digito2 <- (numero DIV 10) MOD 10
digito1 <- (numero DIV 100) MOD 10
FIMSE
RETORNAR digito1*/

export function divisionOperator(num: number): number {
    let digit1: number, digit2: number, digit3: number;


    if (num < 100 || num > 999) {
        digit1 = -1;
    } else {
        //digit3 = num % 10;
        //digit2 = Math.floor(num / 10) % 10;
        digit1 = Math.floor(num / 100) % 10;
    }
    return digit1;
};
