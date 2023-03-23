import { controlPollutionIndex } from "../Exercise2.14";

describe('Testing the pollution control of 3 groups of companies', () => {
    test('Negative number should raise an exception', () => {
        expect(() => {
            controlPollutionIndex(-1);
        }).toThrow('Unexpected parameter');
        
    });
    test('Testing if the pollution index is 0 should return "Aceptable index pollution"', () => {

        //Arrange
        let index: number = 0;
        let expectededResult: string = "Aceptable index pollution" ;

        //Act
        let functionResult = controlPollutionIndex (index);

        //Assert
        expect(functionResult).toBe(expectededResult);
    
    });

    test('Testing if the pollution index is 0.4 should return "1º group need suspend activity"', () => {

        //Arrange
        let index: number = 0.4;
        let expectededResult: string = "1º group need suspend activity" ;

        //Act
        let functionResult = controlPollutionIndex (index);

        //Assert
        expect(functionResult).toBe(expectededResult);
    
    });

    test('Testing if the pollution index is 0.5 should return "1º and 2º groups need suspend activity"', () => {

        //Arrange
        let index: number = 0.5;
        let expectededResult: string = "1º and 2º groups need suspend activity";

        //Act
        let functionResult = controlPollutionIndex(index);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Testing if the pollution index is 0.6 should return "All 3 groups need suspend activity"', () => {
        //Arrange
        let index: number = 0.6;
        let expectededResult: string = "All 3 groups need suspend activity";

        //Act
        let functionResult = controlPollutionIndex(index);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});