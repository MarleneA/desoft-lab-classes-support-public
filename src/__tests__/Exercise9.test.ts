import { calculateDistanceOfRunner } from "../Exercise9";


describe('Testing the distance runned comparing to runners', () => {
    test('Comparing de distance runned of Manel 42195 meters in 14530 seconds, with the time of Zé 3900 seconds should give 11.33km for the distance runned for Zé.', () => {

        //Arrange
    
        let expectededResult: number = 11.3255677907777;

        //Act
        let functionResult = calculateDistanceOfRunner();

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});