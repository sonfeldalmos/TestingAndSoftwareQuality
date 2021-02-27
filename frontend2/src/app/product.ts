export interface Product{
    Id: number,
    ProductName: string,
    Prize: number,
    DiscountLimit: number,
    DiscountAmount: number
    AmountToPurchase?:number;
}