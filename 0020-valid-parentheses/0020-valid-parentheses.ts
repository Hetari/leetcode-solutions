function isValid(s: string): boolean {
    const stack = []
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for (let i = 0; i < s.length; i++) {
        const ch = s[i]
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch)
            continue
        }
        if (ch === ')' || ch === '}' || ch === ']') {
            const last = stack.pop()
            if (last !== pairs[ch]) return false
        }
    }

    return stack.length === 0
};
