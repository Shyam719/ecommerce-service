import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto';
import { Category } from './category.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly catModel: Model<Category>,
  ) {}

  async create(files: any, createCatDto: CreateCategoryDto): Promise<Category> {
    const cat: any = {
      ...createCatDto,
      image: {
        data: files.image[0].buffer,
        contentType: files.image[0].mimetype,
        originalName: files.image[0].originalname,
      },
      icon: {
        data: files.icon[0].buffer,
        contentType: files.icon[0].mimetype,
        originalName: files.image[0].originalname,
      },
    };

    const category = new this.catModel(cat);
    await category.save();
    return category;
  }

  async fetch(): Promise<Category[]> {
    const categories = await this.catModel.find({});
    return categories;
  }
}
