import { calculatePriceSales } from "../Exercise2.12";

describe('Testing if a price return a percentage salesprice', () => {
    test('Given the price of a product 350 should return 140 of discount', () => {

        //Arrange
        let price: number = 350;
        let expectededResult: number = 140;

        //Act
        let functionResult = calculatePriceSales(price);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

   test('Given the price of a product 189 should return 113.4 of discount', () => {

        //Arrange
        let price: number = 189;
        let expectededResult: number = 113.39999999999999 ;

        //Act
        let functionResult = calculatePriceSales(price);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the price of a product 75 should return 52.5 of discount', () => {

        //Arrange
        let price: number = 75;
        let expectededResult: number = 52.5;

        //Act
        let functionResult = calculatePriceSales(price);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the price of a product 43 should return 34.4 of discount', () => {

        //Arrange
        let price: number = 43;
        let expectededResult: number = 34.4;

        //Act
        let functionResult = calculatePriceSales(price);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});