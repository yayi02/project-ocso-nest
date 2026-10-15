import { IsEmail, IsObject, IsOptional, IsString, MaxLength, } from "class-validator";
import { Employee } from "../../employees/entities/employee.entity.js";
import { Location } from "../../locations/entities/location.entity.js";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class LocationEmployeeDto extends Location {
  @ApiProperty()
  locationId: number;

  @ApiPropertyOptional()
  locationName: string;

  @ApiPropertyOptional()
  locationLatLng: number[];

  @ApiPropertyOptional()
  locationAddress: string;
}

export class CreateEmployeeDto extends Employee {
    @ApiProperty()
    @IsString()
    @MaxLength(30)
    employeeName: string;

    @ApiProperty()
    @IsString()
    @MaxLength(70)
    employeeLastName: string;

    @ApiProperty()
    @IsString()
    @MaxLength(10)
    employeePhoneNumber: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    employeeEmail: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    location: LocationEmployeeDto;
}
