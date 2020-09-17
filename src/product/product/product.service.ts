import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from '../dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly prdModel: Model<Product>,
  ) {}
  async addProduct(image: any, prdDTO: CreateProductDto): Promise<Product> {
    const prd = new this.prdModel({
      ...prdDTO,
      image: {
        data: image.buffer,
        contentType: image.mimetype,
        originalName: image.originalname,
      },
    });
    const res = await prd.save();
    return res;
  }

  async getProducts(): Promise<Product[]> {
    return await this.prdModel.find();
  }
}
