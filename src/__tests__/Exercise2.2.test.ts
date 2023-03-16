import { returnGradeTrue } from "../Exercise2.2";


describe('Testing the boolean grade', () => {
    test('grade 12 should have a true result', () => {

        //Arrange
        let grade: number = 12
        let expectededResult: boolean = true;

        //Act
        let gradeResult = returnGradeTrue(grade);

        //Assert
        expect(gradeResult).toBe(expectededResult);
    });
});     

