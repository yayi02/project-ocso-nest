import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryColumn('uuid')
      employeeId: string;
      @Column('text')
      name: string;
      @Column('text')
      lastName: string;
      @Column('text')
      phoneNumber: string;
      @Column('text')
      email: string;
}
