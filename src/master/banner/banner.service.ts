import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Banner } from './banner.schema';
import { CreateBannerDto } from './dto';

@Injectable()
export class BannerService {
  constructor(
    @InjectModel('Banner') private readonly bannerModel: Model<Banner>,
  ) {}

  async create(file: any, createBannerDto: CreateBannerDto): Promise<Banner> {
    const banner = new this.bannerModel({
      ...createBannerDto,
      image: {
        data: file.buffer,
        contentType: file.mimetype,
        originalName: file.originalname,
      },
    });
    const res = await banner.save();
    return res;
  }

  async fetch(): Promise<Banner[]> {
    const banners = await this.bannerModel.find({});
    return banners;
  }
}
