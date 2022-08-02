function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}

function increment(number) {
    number++;
    return number;
}
function decrement(number) {
    number--;
    return number;
}
function makeInt(string) {
    string = parseInt(string, 10);
    return string;
}
function preserveDecimal(string) {
    string = parseFloat(string);
    return string;
}
