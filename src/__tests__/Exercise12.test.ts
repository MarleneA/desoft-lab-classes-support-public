import { calculateBuildingHeightWithShadows } from "../Exercise12";

describe('Testing the calculation of a building height with is shadow and a person shadow', () => {
    test('Given a building shadow of 40 and a person height 2 and person shadow 4 the height of the building should be 20 meters.', () => {

        //Arrange
        let buildingShadow: number = 40;
        let personheight: number = 2;
        let personShadow: number = 4;
        let expectededResult: number = 20;

        //Act
        let functionResult = calculateBuildingHeightWithShadows(buildingShadow, personheight, personShadow);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});