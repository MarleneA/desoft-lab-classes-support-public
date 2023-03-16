/*INICIO (nota1: INTEIRO, nota2: INTEIRO, nota3: INTEIRO, 
    peso1: INTEIRO, peso2: INTEIRO, peso3: INTEIRO) 
    ED: mediaPesada REAL
    mediaPesada  (nota1*peso1+ nota2*peso2+ nota3*peso3) /(peso1+peso2+peso3)
    RETORNA (mediaPesada)
    FIM*/

    export function calculateHeavyAverage(note1: number, note2: number, note3: number, weigth1: number, weigth2: number, weigth3: number){
        let heavyAverage = (note1 * weigth1 + note2 * weigth2 + note3 * weigth3) / (weigth1 + weigth2 + weigth3);
        return (heavyAverage);
    }

    console.log("The heavy Average is " + calculateHeavyAverage(10, 15, 9, 0.20, 0.40, 0.40));
