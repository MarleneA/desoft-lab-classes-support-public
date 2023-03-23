export function controlPollutionIndex(pollutionIndex: number) {
    if (pollutionIndex < 0) {
        throw new RangeError('Unexpected parameter');
    }
    else if (pollutionIndex >= 0 && pollutionIndex <= 0.3) {
        return "Aceptable index pollution";
    }
    else if (pollutionIndex > 0.3 && pollutionIndex <= 0.4) {
        return "1º group need suspend activity";
    }
    else if (pollutionIndex > 0.4 && pollutionIndex <= 0.5) {
        return "1º and 2º groups need suspend activity";
    }
    else{
        return "All 3 groups need suspend activity";
    }
};