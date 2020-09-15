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
  Logger,
  UploadedFiles,
  Get,
} from '@nestjs/common';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { SubCategoryService } from './sub-category.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateSubCategoryDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiUseTags('Sub Category')
@Controller('subCategory')
@UseGuards(RolesGuard)
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'icon', maxCount: 1 },
    ]),
  )
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ title: 'Create sub-category' })
  @ApiCreatedResponse({})
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({
    name: 'image',
    description: 'Sub Category Image',
    required: true,
  })
  @ApiImplicitFile({
    name: 'icon',
    description: 'Icon Image',
    required: true,
  })
  @ApiBearerAuth()
  @ApiImplicitHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  async create(
    @UploadedFiles() files,
    @Body() createSubCatDto: CreateSubCategoryDto,
  ) {
    return await this.subCategoryService.create(files, createSubCatDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ title: 'Fetch sub category' })
  @ApiBearerAuth()
  @ApiImplicitHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  async fetch() {
    return await this.subCategoryService.fetch();
  }
}
