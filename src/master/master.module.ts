import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './category/category.schema';
import { Module } from '@nestjs/common';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { SubCategoryController } from './sub-category/sub-category.controller';
import { SubCategoryService } from './sub-category/sub-category.service';
import { AuthModule } from 'src/auth/auth.module';
import { SubCategorySchema } from './sub-category/sub-category.schema';
import { BannerSchema } from './banner/banner.schema';
import { BannerController } from './banner/banner.controller';
import { BannerService } from './banner/banner.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Category', schema: CategorySchema },
      { name: 'SubCategory', schema: SubCategorySchema },
      { name: 'Banner', schema: BannerSchema },
    ]),
    AuthModule,
  ],
  controllers: [CategoryController, SubCategoryController, BannerController],
  providers: [CategoryService, SubCategoryService, BannerService],
})
export class MasterModule {}
