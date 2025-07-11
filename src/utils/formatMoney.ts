
export const formatMoney = (price: number) => {
    // const formatPrice = `$${new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 2 }).format(price)}`;
    const formatPrice = `$${new Intl.NumberFormat().format(price)}`;
    return formatPrice
}