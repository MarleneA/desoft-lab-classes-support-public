//testar funções


export function percentage(boys: number, girls: number): [number, number] {
    let total = boys + girls;
    let boysPercentage = boys / total;
    let girlsPercentage = girls / total;
    console.log("boysPercentage =", + boysPercentage);
    console.log("girlsPercentage =", + girlsPercentage);
    return [girlsPercentage, boysPercentage]
}

percentage(10, 15);
console.log(percentage(10, 15));