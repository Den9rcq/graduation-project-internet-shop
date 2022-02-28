export const getEnding = (num) => {
    if (num > 1 && num < 5) return 'a'
    else if (num === 5 && num < 21) return 'ов'
}
