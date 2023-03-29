export function totalMaterialCost(area: number, trees: number, bushes: number): number {
    let lawnPrice = area * 10;
    let treesPrice = trees * 20;
    let bushesPrice = bushes * 15;
    let materialPrice = lawnPrice + treesPrice + bushesPrice;
    return materialPrice;
};

export function calculateTimeCost(units: number, timeCost: number, priceHour: number): number {
    let timeInHours = timeCost / 3600;
    let necessaryTime = timeInHours * units;
    return necessaryTime * priceHour;
};

export function calculateTotaCostEstimate(area:number, trees: number, bushes: number, timeCostLawn: number, timeCostTrees: number, timeCostBushes: number, priceHour: number): number {
    let materialPrice = totalMaterialCost(area, trees, bushes);
    let estimatedCostLawn = calculateTimeCost(area, timeCostLawn, priceHour);
    let estimatedCostTrees = calculateTimeCost(trees, timeCostTrees, priceHour);
    let estimatedCostBushes = calculateTimeCost(bushes, timeCostBushes, priceHour);
    return materialPrice + estimatedCostLawn + estimatedCostTrees + estimatedCostBushes;
};


