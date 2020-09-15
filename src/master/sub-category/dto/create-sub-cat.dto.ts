import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
  IsNumber,
  IsOptional,
  IsMongoId,
} from 'class-validator';
import {
  ApiModelProperty,
  ApiModelPropertyOptional,
  ApiImplicitFile,
} from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export class CreateSubCategoryDto {
  @ApiModelProperty({
    example: 'Example Name',
    description: 'Name of Category',
    format: 'string',
    minLength: 6,
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly name: string;

  @ApiModelProperty({
    example: 'Example manage inventory',
    description: 'manage inventory',
    format: 'number',
  })
  @ApiModelPropertyOptional()
  @IsNumber()
  @IsOptional()
  readonly manageInventory: number;

  @ApiModelProperty({
    example: 'Example status',
    description: 'Status of document',
    format: 'number',
  })
  @ApiModelPropertyOptional()
  @IsNumber()
  @IsOptional()
  readonly status: number;

  @ApiModelProperty({
    example: 'Existing category',
    description: 'category',
    format: 'string',
  })
  @ApiModelPropertyOptional()
  @IsMongoId()
  readonly category: mongoose.Schema.Types.ObjectId;
}
