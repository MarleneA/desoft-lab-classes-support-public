export function calculatePriceSales(price: number): number {
    if (price > 200) {
        return (price - (price * 0.60));
    }
    else if (price > 100 && price <= 200) {
        return (price - price * 0.40);
    }
    else if (price > 50 && price <= 100) {
        return (price - (price * 0.30));
    }
    else {
        return (price - (price * 0.20));
    }
};

