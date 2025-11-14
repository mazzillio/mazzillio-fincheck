import { Inject, Injectable } from '@nestjs/common';
import { CategoriesResponse } from '../dto/out/categories-response.dto';
import { CategoriesGateway } from '../gateways/categories.gateway';
import { CategoriesUseCase } from '@application/port/in/categories.use-case';

@Injectable()
export class CategoriesService implements CategoriesUseCase {
  constructor(
    @Inject('CategoriesGatewayInterface') 
    private readonly categoriesGateway: CategoriesGateway) {}

  async findAllByUserId(userId: string): Promise<CategoriesResponse[]> {
    return this.categoriesGateway.findAll(userId);
  }

}
