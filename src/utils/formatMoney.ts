
export const formatMoney = (price: number) => {
    const formatPrice = `$${new Intl.NumberFormat().format(price)}`;
    return formatPrice
}