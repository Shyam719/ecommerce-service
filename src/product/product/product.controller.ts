import {
  Controller,
  Post,
  Res,
  Body,
  UseInterceptors,
  UploadedFile,
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
  @Post('/add')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  create(@UploadedFile() image) {
    //@Body() createPrdDTO: CreateProductDto
    console.log(image);
    return 'super';
    //return this.productService.addProduct(image, createPrdDTO);
  }
}
