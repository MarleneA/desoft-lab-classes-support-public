export function paintingCost(totalArea: number, literCost: number, yieldPerLiter: number): number {
    let totalLiters: number = totalArea / yieldPerLiter;
    let totalCostLiters: number = literCost * totalLiters;
    return totalCostLiters;
};

export function numberOfPaintersPerArea(totalArea: number): number {
    if (totalArea <= 0) {
        throw new RangeError("Invalid number");
    }
    else if (totalArea > 0 && totalArea < 100) {
        return 1;
    }
    else if (totalArea >= 100 && totalArea < 300) {
        return 2;
    }
    else if (totalArea >= 300 && totalArea < 1000) {
        return 3;
    }
    else {
        return 4;
    };
};

export function calculateCostOfLaborPainting(totalArea: number, dailyPainterSalary: number) {
    const dailyProductivityOfOnePainter: number = 16;
    let daysOfPainting: number = totalArea / dailyProductivityOfOnePainter * numberOfPaintersPerArea(totalArea);
    return daysOfPainting * dailyPainterSalary;
};

export function buildingCostPainting(totalArea: number, literCost: number, yieldPerLiter: number, dailyPainterSalary: number) {
    return paintingCost(totalArea, literCost, yieldPerLiter) + calculateCostOfLaborPainting(totalArea, dailyPainterSalary);
}
