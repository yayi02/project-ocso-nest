import { IsInt, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { IsUUID } from 'class-validator';
import { Product } from "../entities/product.entity.js";
import { Provider } from "../../providers/entities/provider.entity.js";

export class CreateProductDto extends Product{
    @IsString()
    @IsUUID('4') 
    @IsOptional()
    productId: string;
    @IsString()
    @MaxLength(40)
    productName: string;
    @IsNumber()
    price: number;
    @IsInt()
    countSeal: number;
    @IsString()
    @IsUUID('4')
    @IsOptional()
    provider: Provider;
}
