
export function calculateCylinderVolume(height: number): (number) {
    let volume: number = Math.PI * height;
    let liters: number = volume * 1000;
    return (volume);
};