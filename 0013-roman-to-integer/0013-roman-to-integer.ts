function romanToInt(s: string): number {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let tempInput = s
    let num = 0
    for (let i = 0; i < s.length; i++) {
        const current = roman[s[i]];
        const after = roman[s[i + 1]];

        if (after && current < after) num -= current
        else num += current
    }
    return num
};