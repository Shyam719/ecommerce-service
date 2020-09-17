import {
  ApiUseTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiConsumes,
  ApiImplicitFile,
  ApiBearerAuth,
  ApiImplicitHeader,
} from '@nestjs/swagger';
import {
  Controller,
  UseGuards,
  Post,
  HttpCode,
  UseInterceptors,
  HttpStatus,
  Body,
  UploadedFile,
} from '@nestjs/common';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { CreateBannerDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { BannerService } from './banner.service';

@ApiUseTags('Banner')
@Controller('banner')
@UseGuards(RolesGuard)
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin')
  @UseInterceptors(FileInterceptor('image'))
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ title: 'Create banner' })
  @ApiCreatedResponse({})
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({
    name: 'image',
    description: 'Category banner',
    required: true,
  })
  @ApiBearerAuth()
  @ApiImplicitHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  async create(@UploadedFile() file, @Body() createBannerDto: CreateBannerDto) {
    return await this.bannerService.create(file, createBannerDto);
  }
}
