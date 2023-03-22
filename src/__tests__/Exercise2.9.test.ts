import { daysGreeting } from "../Exercise2.9";

describe('Testing whether greetings appear after providing a number in seconds', () => {
    test('23000 seconds should give "Good Morning" ', () => {
        //Arrange
        let seconds = 23000;
        let expectededResult: string = "Good Morning";

        //Act
        let functionResult = daysGreeting(seconds);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('52000 seconds should give "Good Afternoon"', () => {
        //Arrange
        let seconds = 52000;
        let expectededResult: string = "Good Afternoon";

        //Act
        let functionResult = daysGreeting(seconds);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('85000 seconds should give "Good Night"', () => {
        //Arrange
        let seconds = 85000;
        let expectededResult: string = "Good Night";

        //Act
        let functionResult = daysGreeting(seconds);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

        test('Zero seconds should raise an exception', () => {
        expect(() => {
            daysGreeting(0);
        }).toThrow('Choose a valid seconds range');
    });
});