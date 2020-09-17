import {
  Controller,
  Post,
  Res,
  Body,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from '../dto';
import {
  FileInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post('')
  @UseInterceptors(FileInterceptor('image'))
  create(@UploadedFile() image, @Body() createPrdDTO: CreateProductDto) {
    return this.productService.addProduct(image, createPrdDTO);
  }

  @Get('')
  getProducts() {
    return this.productService.getProducts();
  }
}
