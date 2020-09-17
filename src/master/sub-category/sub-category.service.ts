import { Injectable } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto';
import { SubCategory } from './sub-category.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectModel('SubCategory')
    private readonly subCatModel: Model<SubCategory>,
  ) {}

  async create(
    files: any,
    createSubCatDto: CreateSubCategoryDto,
  ): Promise<SubCategory> {
    const subCat: any = {
      ...createSubCatDto,
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
      category: mongoose.Types.ObjectId(createSubCatDto.category),
    };

    const subcategory = new this.subCatModel(subCat);
    await subcategory.save();
    return subcategory;
  }

  async fetch(): Promise<SubCategory[]> {
    const subCategories = await this.subCatModel.find({});
    return subCategories;
  }
}
