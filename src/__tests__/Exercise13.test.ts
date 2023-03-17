import { calculateWorkersDistance } from "../Exercise13";

describe('Testing the distance between to workers', () => {
    test('Given a cable with 60m and another one with 40m and a cos with 60º the distance between workers should be 14.142135623730953', () => {

        //Arrange

        let expectededResult: number = 14.142135623730953;

        //Act
        let functionResult = calculateWorkersDistance();

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});