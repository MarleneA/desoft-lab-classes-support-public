function calculateDistanceBetweenToPoints(pointA1: number, pointB1: number, pointA2: number, pointB2: number): number {
    let distance = Math.sqrt(Math.pow(pointA1 - pointA2, 2) + Math.pow(pointB1 - pointB2, 2));
    return (distance);

};