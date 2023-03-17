import { calculateHypotenuse } from "../Exercise5";

describe('Testing the calculation of the hypotenuse', () => {
    test('given 2 for cateto1 and 5 to cateto2 the hypotenuse should be ', () => {

        //Arrange
        let cateto1: number = 2;
        let cateto2: number = 5;
        let expectededResult: number = 5.385164807134504;

        //Act
        let functionResult = calculateHypotenuse(cateto1, cateto2);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});