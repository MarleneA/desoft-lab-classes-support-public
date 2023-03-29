import { calculateBuildingHeight } from "../Exercise11";

describe('Testing the calculation of the height of a building throwing a stone', () => {
    test('Throwing a stone that takes 2 seconds to fall to the ground should expect that the height of the building is 19.6 meters', () => {

        //Arrange
        let timeSeconds: number = 2;
        let expectededResult: number = 19.6;

        //Act
        let functionResult = calculateBuildingHeight(timeSeconds);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});

test('Throwing a stone that takes 2 seconds to fall to the ground should expect that the height of the building is 19.6 meters', () => {
//Arrange
let timeSeconds: number = 0;
let expectededResult: number = 0;

//Act
let functionResult = calculateBuildingHeight(timeSeconds);

//Assert
expect(functionResult).toBe(expectededResult);
});