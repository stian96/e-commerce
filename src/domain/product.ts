// Function to generate a random price between a min and max value.
export const getRandomPrice = (min: number, max: number): number => {
    const number: string = (Math.random() * (max - min) + min).toFixed(2)
    return parseFloat(number);
}