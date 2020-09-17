import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
//import { Product } from '../product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from '../dto';

@Injectable()
export class ProductService {
  constructor() //@InjectModel('Product') private readonly prdModel: Model<Product>,
  {}
  // addProduct(image: any, prdDTO: CreateProductDto): Product {
  //   const prd = new this.prdModel({ ...prdDTO, image });
  //   debugger;
  //   return prd;
  // }
}
