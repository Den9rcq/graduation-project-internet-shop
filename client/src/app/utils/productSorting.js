export const productSorting = (products, sortStatus) => {
    switch (sortStatus) {
    case 'popular':
        return [...products]
    case 'highToLow':
        return [...products].sort((a, b) => b.price - a.price)
    case 'lowToHigh':
        return [...products].sort((a, b) => a.price - b.price)
    default:
        return products
    }
}
