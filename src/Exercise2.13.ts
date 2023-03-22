export function determineClassPerformance(approved: number): String {
    if (approved <0 || approved >1){
        return ("Invalid value");
    }
    else if (approved < 0.2){
        return ("Bad Class");
    }
    else if (approved < 0.5){
        return ("Weak Class");
    }
    else if (approved < 0.7){
        return ("Reasonable Class");
    }
    else if (approved < 0.9){
        return("Great Class");
    }
    else{
        return ("Excellent Class");
    }
}

function determineClassPerformanceParameterDynamicParameter(approved: number, min: number, max: number, bad: number, weak:number, reasonable: number, great: number): String {
    if (approved <min || approved >max){
        return ("Invalid value")
    }
    else if (approved < bad){
        return ("Bad Class");
    }
    else if (approved < weak){
        return ("Weak Class");
    }
    else if (approved < reasonable){
        return ("Reasonable Class");
    }
    else if (approved < great){
        return("Great Class");
    }
    else{
        return ("Excellent Class");
    }
}

