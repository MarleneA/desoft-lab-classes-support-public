export function determineClassPerformance(approved: number): string{
    if (approved < 0 || approved > 1) {
        return ("Invalid value");
    }
    else if (approved < 0.2) {
        return ("Bad Class");
    }
    else if (approved < 0.5) {
        return ("Weak Class");
    }
    else if (approved < 0.7) {
        return ("Reasonable Class");
    }
    else if (approved < 0.9) {
        return ("Great Class");
    }
    else {
        return ("Excellent Class");
    }
};