import { calculatePerimeter } from "../Exercise4";

describe('Testing the calculation of the perimeter', () => {
    test('given an height of 10 and an width 20 the perimeter expected is 60', () => {

        //Arrange
        let height: number = 10;
        let width: number = 20;
        let expectededResult: number = 60;

        //Act
        let functionResult = calculatePerimeter(height, width);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});