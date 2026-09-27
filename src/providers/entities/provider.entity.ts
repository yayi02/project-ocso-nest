import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity.js';

@Entity()

export class Provider {
    @PrimaryColumn('uuid')
    providerId: string;
    @Column('text')
    providerName: string;
    @Column('text')
    providerEmail: string;
    @Column({
        type:'text',
        nullable: true
    })
    providerPhoneNumber: string;
    @OneToMany(() => Product, (product) => product.provider)
    products: Product[];
}
