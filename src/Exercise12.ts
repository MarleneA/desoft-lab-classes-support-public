/*INICIO
ED: S, s, h, H, real

Ler (S, s, h)
H<-S/s*h
Escrever (“A altura do edifício é “, H)

FIM*/

function calculateBuildingHeightWithShadows(buildingShadow: number, personheight: number, personShadow: number): number{
    let buildingHeight = buildingShadow / personShadow * personheight; 
    return(buildingHeight);
}

console.log("The Building height is " + calculateBuildingHeightWithShadows(40, 2, 4));