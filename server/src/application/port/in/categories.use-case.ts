import { CategoriesResponse } from '@application/domain/dto/out/categories-response.dto';

export interface CategoriesUseCase {
  findAllByUserId(userId: string): Promise<CategoriesResponse[]>;
}
