
export function calculateMilesAverageToKms(distance1: number, distance2: number, distance3: number, distance4: number, distance5: number): number{
    let array_miles: number []= [distance1, distance2, distance3, distance4, distance5];
    let weekDistance: number= 0;

    for(let i=0; i< array_miles.length; i++){
        weekDistance = weekDistance + array_miles[i];
    }
    let dailyAverage: number= weekDistance/array_miles.length;
    let dailyDistanceKms: number = (dailyAverage * 1609) / 1000;
    return dailyDistanceKms;
};