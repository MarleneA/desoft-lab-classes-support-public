import { calculateTotalPrice } from "../Exercise2";


describe('Testing the total price of roses and tulips', () => {
    test('3 roses and 5 tulips with price roses 0.5 and price tulips 0.3 should be 3 ', () => {

        //Arrange
        let roses: number = 3;
        let priceRoses: number = 0.5;
        let tulips: number = 5;
        let priceTulips: number = 0.3;
        let expectededTotalPrice: number = 3;


        //Act
        let totalPrice: number = calculateTotalPrice(roses, tulips, priceRoses, priceTulips);

        //Assert
        expect(expectededTotalPrice).toBe(totalPrice);
    });
});   