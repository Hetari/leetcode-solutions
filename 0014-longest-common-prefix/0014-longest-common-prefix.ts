function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return ''

   
    const ref = strs?.[0]
    if(!ref) return ""

    let prefix = ""
    for (let i = 0; i < ref.length; i++) {
        const ch = ref[i]
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== ch) return prefix
        }
        prefix += ch
    }
    return prefix
};