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

    test('grade 8 should have a true result', () => {

        //Arrange
        let grade: number = 8
        let expectededResult: boolean = true;

        //Act
        let gradeResult = returnGradeTrue(grade);

        //Assert
        expect(gradeResult).toBe(expectededResult);
    });

    test('grade 6 should have a false result', () => {

        //Arrange
        let grade: number = 6
        let expectededResult: boolean = false;

        //Act
        let gradeResult = returnGradeTrue(grade);

        //Assert
        expect(gradeResult).toBe(expectededResult);
    });
});

