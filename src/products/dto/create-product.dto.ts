import {IsInt, IsNumber, IsOptional, IsString, MaxLength, IsUUID,} from 'class-validator';
import { Provider } from '../../providers/entities/provider.entity.js';

export class CreateProductDto {
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
