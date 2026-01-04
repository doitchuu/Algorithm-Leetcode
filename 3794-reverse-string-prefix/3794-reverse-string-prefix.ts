function reversePrefix(s: string, k: number): string {
    if (k === 1) {
        return s;
    }
    
    let result = s[k - 1];
    const middleChar = s.slice(0, k - 1);
    const lastChar = s.slice(k);

    if (middleChar) {
        result += [...middleChar].reverse().join(""); 
    }

    if (lastChar) {
        result += lastChar;
    }
    
    return result;
};