export function daysGreeting(seconds: number): string {
    if (seconds == 0){
        throw new RangeError('Choose a valid seconds range');
    }
    if (seconds > 21600 && seconds < 43201) {
        return ("Good Morning");
    }
    else if (seconds > 43201 && seconds < 72001) {
        return ("Good Afternoon");
    }
    else {
        return ("Good Night");
    }
    
}