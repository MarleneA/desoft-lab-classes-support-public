import { calculateCylinderVolume } from "../Exercise3";

describe('Testing the calculation of the volume', () => {
    test('given an height of 10 the cylinder volume expected is 31.41592653589793', () => {

        //Arrange
        let height: number = 10;
        let expectededResult: number = 31.41592653589793 ;

        //Act
        let functionResult = calculateCylinderVolume(height);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});