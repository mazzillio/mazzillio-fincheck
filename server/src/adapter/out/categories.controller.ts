import { CategoriesResponse } from '@application/domain/dto/out/categories-response.dto';
import { CategoriesService } from '@application/domain/services/categories.service';
import { CategoriesAdapter } from '@application/port/out/categories.adapter';
import { ActiveUserId } from '@config/decorators/Active-User-Id.decorator';
import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController implements CategoriesAdapter {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Get()
  async findAll(@ActiveUserId() userId: string): Promise<CategoriesResponse[]> {
    return this.categoriesService.findAllByUserId(userId);
  }
}
