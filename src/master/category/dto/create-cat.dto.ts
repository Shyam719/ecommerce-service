import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import {
  ApiModelProperty,
  ApiModelPropertyOptional,
  ApiImplicitFile,
} from '@nestjs/swagger';

export class CreateCategoryDto {
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
  @IsString()
  @IsOptional()
  readonly manageInventory: number;

  @ApiModelProperty({
    example: 'Example status',
    description: 'Status of document',
    format: 'number',
  })
  @ApiModelPropertyOptional()
  @IsString()
  @IsOptional()
  readonly status: number;
}
