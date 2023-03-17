import { convertTofahrenheit } from "../Exercise6";

describe('Testing the conversion to celsius to fahrenheit', () => {
    test('20 celsius should be 77 Fahrenheit', () => {

        //Arrange
        let celsius: number = 25;
        let expectededResult: number = 77;

        //Act
        let functionResult = convertTofahrenheit(celsius);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});