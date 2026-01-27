function isPalindrome(x: number): boolean {
    let num = Math.abs(x)
    let reversedNumber = 0
    while (num) {
        const lastDigit = num % 10
        reversedNumber = (reversedNumber * 10) + lastDigit
        num = Math.floor(num / 10);
    }
    return x === reversedNumber
};