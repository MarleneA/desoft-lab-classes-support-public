import { calculateHeavyAverage } from '../Exercise2.1';

describe('Testing the Calculate heavy average', () => {
    test('10, 15, 9 notes should have a 11.6 heavy average', () => {

        //Arrange
        let note1: number = 10;
        let note2: number = 15;
        let note3: number = 9;
        let weigth1: number = 0.20;
        let weigth2: number = 0.40;
        let weigth3: number = 0.40;
        let expectededHeavyAverage: number = 11.6;

        //Act
        let heavyAverage = calculateHeavyAverage(note1, note2, note3, weigth1, weigth2, weigth3);

        //Assert
        expect(heavyAverage).toBe(expectededHeavyAverage);
    
    });
});



