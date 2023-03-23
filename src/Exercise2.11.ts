export function isAscendingOrder(num: number): boolean {
    let arrOriginal: Number[] = Array.from(String(num), Number);
    let arrSorted: Number[] = arrOriginal.slice().sort();
    if (JSON.stringify(arrOriginal) == JSON.stringify(arrSorted)) {
        return (true);
    }
    return (false);
};

