import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  hsn: string;

  @IsString()
  @IsNotEmpty()
  tax: boolean;

  @IsString()
  @IsNotEmpty()
  disc: number;

  @IsString()
  @IsNotEmpty()
  low_stock: number;

  @IsString()
  @IsNotEmpty()
  mrp: number;

  @IsString()
  @IsNotEmpty()
  sale_price: number;

  @IsString()
  @IsNotEmpty()
  variant: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  subCategory: String;

  @IsString()
  @IsOptional()
  readonly status: number;
}
