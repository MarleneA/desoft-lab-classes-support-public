import { totalMaterialCost } from "../Exercise2.15";

describe('Testing the total cost of the lawn, trees and bushes for a gardenning service', () => {
    test('Given 200m2 for area, 5 trees and 10 bushes should return 2200 of material price', () => {

        //Arrange
        let area: number = 200;
        let trees: number = 5;
        let bushes: number = 10;
        let expectededResult: number = 2250;

        //Act
        let functionResult: number = totalMaterialCost(area, trees, bushes);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });
});

import { calculateTimeCost } from "../Exercise2.15";
describe('Testing the total time cost', () => {
    test('Given 200 square meters with the estimated time of 300 seconds for square meter should return 166.66666666666666 of time cost in hours', () => {

        //Arrange
        let lawnArea: number = 200;
        let timeCostLawn: number = 300;
        let priceHourLawn: number = 10;
        let expectededResult: number = 166.66666666666663;

        //Act
        let functionResult: number = calculateTimeCost(lawnArea, timeCostLawn, priceHourLawn);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });

    test('Given 5 trees, with the estimated time of 600 seconds for each, should return 8.333333333333333 of time cost in hours', () => {

        //Arrange
        let treeUnits: number = 5;
        let timeCostTrees: number = 600;
        let priceHour: number = 10
        let expectededResult: number = 8.333333333333332;

        //Act
        let functionResult: number = calculateTimeCost(treeUnits, timeCostTrees, priceHour);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });

    test('Given 10 bushes with the estimated time of 400 seconds for each, should return  of time cost in hours', () => {

        //Arrange
        let bushUnits: number = 10;
        let timeCostBushes: number = 400;
        let priceHour: number = 10
        let expectededResult: number = 11.11111111111111;

        //Act
        let functionResult: number = calculateTimeCost(bushUnits, timeCostBushes, priceHour);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });
});

import { calculateTotaCostEstimate } from "../Exercise2.15";

describe('Testing the estimate total cost for a gardenning service', () => {
    test('Given ', () => {

        //Arrange
        let area: number = 200;
        let trees: number = 5;
        let bushes: number = 10;
        let timeCostLawn: number = 300;
        let timeCostTrees: number = 600;
        let timeCostBushes: number = 400;
        let priceHour: number = 10;
        let expectededResult: number = 2436.1111111111113;  

        //Act
        let functionResult: number = calculateTotaCostEstimate(area, trees, bushes, timeCostLawn, timeCostTrees, timeCostBushes, priceHour);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });
});
