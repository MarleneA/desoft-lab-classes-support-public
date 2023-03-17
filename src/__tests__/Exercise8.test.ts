import { calculateDistanceOfThunderstorm } from "../Exercise8";

describe('Testing the distance between the ligthning and the thunderstorm', () => {
    test('Given the interval time of 12 the distance of a thunderstorm should be 4080 metros', () => {

        //Arrange
        let intertime: number = 12;
        let expectededResult: number = 4080;

        //Act
        let functionResult = calculateDistanceOfThunderstorm(intertime);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});