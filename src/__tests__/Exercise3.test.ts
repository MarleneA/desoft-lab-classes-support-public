import { calculateCylinderVolume } from "../Exercise3";

describe('Testing the calculation of the volume', () => {
    test('given an height of 10 the cylinder volume expected is 31.41592653589793', () => {

        //Arrange
        const height: number = 5;
        const raio: number = 3;
        let expectededResult: number =141300;

        //Act
        let functionResult = calculateCylinderVolume(height, raio);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});