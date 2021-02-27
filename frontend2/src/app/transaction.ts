import{Product} from './product'

export class Transaction{
    Products:any;
    CheckOutPrize?: number;
    TimeStamp?:any;

    constructor(_products, _checkOutPrize?,_timeStamp?){
        this.Products=_products;
        this.CheckOutPrize=_checkOutPrize;
        this.TimeStamp=_timeStamp;
    }
}