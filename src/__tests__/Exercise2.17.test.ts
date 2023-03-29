import { paintingCost } from "../Exercise2.17";

describe('Testing the total cost of a job painting', () => {
    test('Given 200m^2 of total area and 25€ for one liter of wall paint with a yield of 8m^2 the result expected of total cost liters should be 625€.', () => {

        //Arrange
        let totalArea: number = 200;
        let literCost: number = 25;
        let yieldPerLiter: number = 8; 
        let expectededResult: number = 625;

        //Act
        let functionResult = paintingCost(totalArea, literCost, yieldPerLiter);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });
});

import { numberOfPaintersPerArea } from "../Exercise2.17";

describe('Testing the number of painters needed depending on square meters', () => {
    test('Given 0m^2 of total area should raise an exception.', () => {
        expect(() => {
            numberOfPaintersPerArea(0);
        }).toThrow('Invalid number');
    });

    test('Given 99m^2 of total area the expected result should be 1 painter.', () => {

        //Arrange
        let totalArea: number = 99;
        let expectededResult: number = 1;

        //Act
        let functionResult = numberOfPaintersPerArea(totalArea);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });

    test('Given 299m^2 of total area the expected result should be 2 painter.', () => {

        //Arrange
        let totalArea: number = 299;
        let expectededResult: number = 2;

        //Act
        let functionResult = numberOfPaintersPerArea(totalArea);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });

    test('Given 999m^2 of total area the expected result should be 3 painter.', () => {

        //Arrange
        let totalArea: number = 999;
        let expectededResult: number = 3;

        //Act
        let functionResult = numberOfPaintersPerArea(totalArea);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });

    test('Given 1000m^2 of total area the expected result should be 4 painter.', () => {

        //Arrange
        let totalArea: number = 1000;
        let expectededResult: number = 4;

        //Act
        let functionResult = numberOfPaintersPerArea(totalArea);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });
});

import { calculateCostOfLaborPainting } from "../Exercise2.17";

describe('Testing the cost of labor painting', () => {
    test('Given 200m^2 of total area and 10€ for the painter salary the expected result should be 250€.', () => {

        //Arrange
        let totalArea: number = 200;
        let dailyPainterSalary: number = 10; 
        let expectededResult: number = 250;

        //Act
        let functionResult = calculateCostOfLaborPainting(totalArea, dailyPainterSalary);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });
});

import { buildingCostPainting } from "../Exercise2.17";

describe('Testing the cost of labor painting', () => {
    test('Given 200m^2 of total area and 10€ for the painter salary the expected result should be 250€.', () => {

        //Arrange
        let totalArea: number = 200;
        let literCost: number = 25;
        let yieldPerLiter: number = 8;
        let dailyPainterSalary: number = 10; 
        let expectededResult: number = 875;

        //Act
        let functionResult = buildingCostPainting(totalArea, literCost, yieldPerLiter, dailyPainterSalary);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });
});