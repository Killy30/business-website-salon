
export function FormatPrice(price){
    return new Intl.NumberFormat('en-US').format(price)
}