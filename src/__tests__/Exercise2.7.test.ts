import { calculateCubeVolume } from "../Exercise2.7";

describe('Testing if a volume is Small, Average or Large.', () => {
    test('Given a area number of 15 should return Large', () => {
        //Arrange
        let number = 15;
        let expectededResult: string = "Large";

        //Act
        let functionResult = calculateCubeVolume(number);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Number 0 should return -1. ', () => {
        //Arrange
        let number = 0;
        let expectededResult: string = "-1";

        //Act
        let functionResult = calculateCubeVolume(number);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given number 5 should return "Small" ', () => {
        //Arrange
        let number = 5;
        let expectededResult: string = "Small";

        //Act
        let functionResult = calculateCubeVolume(number);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the number 8 should return "Average" ', () => {
        //Arrange
        let number = 8;
        let expectededResult: string = "Average";

        //Act
        let functionResult = calculateCubeVolume(number);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});