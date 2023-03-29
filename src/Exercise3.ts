
export function calculateCylinderVolume(height: number, raio: number): (number) {
    let area = 3.14 * Math.pow(raio, 2);
    let volume: number = area* height;
    let liters: number = volume * 1000;
    return (liters);
};

