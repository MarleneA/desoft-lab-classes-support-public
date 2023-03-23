import { determineClassPerformance } from "../Exercise2.13";

describe('Testing the performance of a class ', () => {
    test('Given the value -5 the expected result should be the message Invalid value', () => {

        //Arrange
        let approved: number = -5;
        let expectededResult: string = "Invalid value";

        //Act
        let functionResult = determineClassPerformance(approved);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the value 0.1 the expected result should be the message Bad Class', () => {

        //Arrange
        let approved: number = 0.1;

        let expectededResult: string = "Bad Class";

        //Act
        let functionResult = determineClassPerformance(approved);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the value 0.2 the expected result should be the message Weak Class', () => {

        //Arrange
        let approved: number = 0.2;
        let expectededResult: string = "Weak Class";

        //Act
        let functionResult = determineClassPerformance(approved);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the value 0.5 the expected result should be the message Reasonable Class', () => {

        //Arrange
        let approved: number = 0.5;
        let expectededResult: string = "Reasonable Class";

        //Act
        let functionResult = determineClassPerformance(approved);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the value 0.7 the expected result should be the message Great Class', () => {

        //Arrange
        let approved: number = 0.7;
        let expectededResult: string = "Great Class";

        //Act
        let functionResult = determineClassPerformance(approved);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the value 0.9 the expected result should be the message Excellent Class', () => {

        //Arrange
        let approved: number = 0.9;
        let expectededResult: string = "Excellent Class";

        //Act
        let functionResult = determineClassPerformance(approved);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the value 1 the expected result should be the message Excellent Class', () => {

        //Arrange
        let approved: number = 1;
        let expectededResult: string = "Excellent Class";

        //Act
        let functionResult = determineClassPerformance(approved);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given the value 0 the expected result should be the message Bad Class', () => {

        //Arrange
        let approved: number = 0;
        let expectededResult: string = "Bad Class";

        //Act
        let functionResult = determineClassPerformance(approved);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});