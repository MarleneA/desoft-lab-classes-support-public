
export function calculateTotalPrice(roses: number, tulips: number, priceRoses: number, priceTulips: number): number {
    let totalRoses = roses * priceRoses;
    let totalTulips = tulips * priceTulips;
    let totalPrice = totalRoses + totalTulips;
    return (totalPrice);
};