export function findNumberMultiples(x: number, y: number): string {
    if (x % y == 0) {
        return ("x is a multiple of y");
    }
    else if (y % x == 0) {
        return ("y is a multiple of x");
    }
    else {
        return ("x is neither a multiple nor a divisor of y")
    }
};