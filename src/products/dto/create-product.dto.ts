import {IsInt, IsNumber, IsOptional, IsString, MaxLength, IsUUID, IsObject,} from 'class-validator';
import { Provider } from '../../providers/entities/provider.entity.js';
import { Product } from '../entities/product.entity.js';

export class CreateProductDto extends Product {
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
    @IsObject()
    provider: Provider;
}
