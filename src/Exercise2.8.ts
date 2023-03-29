function convertSecondsInHours(tSeconds: number) {
    const tMinutes = Math.floor(tSeconds / 60);
    const seconds = tSeconds % 60;
    const hours = Math.floor(tMinutes / 60);
    const minutes = tMinutes % 60;
    return { hours, minutes, seconds };
};
console.log(convertSecondsInHours(4000));
