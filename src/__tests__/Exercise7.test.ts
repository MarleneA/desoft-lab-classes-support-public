import { conversionToMinutes } from "../Exercise7";

describe('Testing the conversion from hours to minutes after 0 hours', () => {
    test('given 5hours and 30 minutes should return ', () => {

        //Arrange
        let hours: number = 5, minutes: number = 30
        let expectededResult: number = 330;

        //Act
        let functionResult = conversionToMinutes(hours, minutes);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});