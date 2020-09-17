import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
  IsOptional,
  IsNumber,
  IsMongoId,
  ValidateIf,
} from 'class-validator';
import {
  ApiModelProperty,
  ApiModelPropertyOptional,
  ApiImplicitFile,
} from '@nestjs/swagger';

export class CreateBannerDto {
  @ApiModelProperty({
    example: 'Example Desc',
    description: 'Desc of Banner',
    format: 'string',
    minLength: 5,
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly desc: string;

  @ApiModelProperty({
    example: 'Example type',
    description: 'type - category/product',
    format: 'string',
  })
  @ApiModelPropertyOptional()
  @IsString()
  @IsOptional()
  readonly type: string;

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
  @ValidateIf(o => o.type === 'category')
  @IsMongoId()
  readonly category: string;

  @ApiModelProperty({
    example: 'Existing product',
    description: 'product',
    format: 'string',
  })
  @ValidateIf(o => o.type === 'product')
  @IsMongoId()
  readonly product: string;
}
