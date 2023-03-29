export function calculateArrivalTime(departureHours: number, departureMinutes: number, durationHours: number, durationMinutes: number): [string, boolean]{
    const departureInMinutes = departureHours * 60 + departureMinutes;
    const durationInMinutes = durationHours * 60 + durationMinutes;
    const arrivalInMinutes = departureInMinutes + durationInMinutes;
    const arrivalHours: number = Math.trunc(arrivalInMinutes / 60);
    const arrivalMinutes: number = arrivalInMinutes % 60;
    let arrivalFormatedTime: string = arrivalHours.toString().concat(":").concat(arrivalMinutes.toString());

    return [ arrivalFormatedTime, isArrivingOnTheSameDay(arrivalHours, departureHours)];
};

function isArrivingOnTheSameDay(arrivalHours: number, departureHours: number):boolean{
    return arrivalHours >= departureHours ;   
}
    
console.log(calculateArrivalTime(15, 30, 3, 45));

