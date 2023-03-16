
function calculateVolume ( altura:number): [number]{
let volume: number = Math.PI * altura;
let litros: number = volume * 1000;
return [volume];
}

console.log(calculateVolume (10));