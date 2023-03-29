function calculateProcessingEndTime(hourStartTime:number, minutesStartTime: number, secondsStartTime: number, processingTimeSeconds:number):string{
    const startTimeHours: number = hourStartTime * 60 * 60;
    const startTimeMinutes: number = minutesStartTime * 60;
    const startTimeSeconds: number = secondsStartTime + startTimeHours + startTimeMinutes;
    const endingProcessingSeconds: number = processingTimeSeconds + startTimeSeconds;
    const endingInHours = Math.trunc (endingProcessingSeconds/ 3600);
    const endingInMinutes = Math.trunc (endingInHours % 60);
    const endingInSeconds =Math.trunc (endingInMinutes %60);
    let endingProcessing: string = endingInHours.toString().concat(":").concat(endingInMinutes.toString().concat(":").concat(endingInSeconds.toString()));
    return endingProcessing;
    }
    
    console.log(calculateProcessingEndTime(14, 30, 50, 9600));