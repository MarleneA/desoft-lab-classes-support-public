import { calculateMilesAverageToKms } from "../Exercise2.16";

describe('Testing the average distance traveled by a courier in a work week', () => {
    test('Given 5 distances (10, 5, 11, 12, 14) the expected result should be 16.733600000000003', () => {

        //Arrange
        let expectededResult: number = 16.733600000000003;

        //Act
        let functionResult = calculateMilesAverageToKms(10, 5, 11, 12, 14);

        //Assert
        expect(functionResult).toBe(expectededResult);

    });
});