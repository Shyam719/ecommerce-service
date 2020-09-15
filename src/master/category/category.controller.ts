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
import { CategoryService } from './category.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateCategoryDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiUseTags('Category')
@Controller('category')
@UseGuards(RolesGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

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
  @ApiOperation({ title: 'Create category' })
  @ApiCreatedResponse({})
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({
    name: 'image',
    description: 'Category Image',
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
    @Body() createCatDto: CreateCategoryDto,
  ) {
    return await this.categoryService.create(files, createCatDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ title: 'Fetch category' })
  @ApiBearerAuth()
  @ApiImplicitHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  async fetch() {
    return await this.categoryService.fetch();
  }
}
