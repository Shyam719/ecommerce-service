import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './category/category.schema';
import { Module } from '@nestjs/common';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { SubCategoryController } from './sub-category/sub-category.controller';
import { SubCategoryService } from './sub-category/sub-category.service';
import { AuthModule } from 'src/auth/auth.module';
import { SubCategorySchema } from './sub-category/sub-category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),
    MongooseModule.forFeature([
      { name: 'SubCategory', schema: SubCategorySchema },
    ]),
    AuthModule,
  ],
  controllers: [CategoryController, SubCategoryController],
  providers: [CategoryService, SubCategoryService],
})
export class MasterModule {}
