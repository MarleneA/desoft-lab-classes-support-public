export function calculateCubeVolume(area: number): string {
    let edge: number;
    let volume: number;

    if (area > 0) {
        edge = Math.sqrt(area / 6);
        volume = Math.pow(edge, 3);
    }
    else {
        return "-1";
    }
    if (volume <= 1) {
        return "Small";
    }
    else if (volume > 1 && volume <= 2) {
        return "Average";
    }
    else {
        return "Large";
    }
};

