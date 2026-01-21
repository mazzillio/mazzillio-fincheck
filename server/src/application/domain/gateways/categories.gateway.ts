import { CategoriesResponse } from '../dto/out/categories-response.dto';

export interface CategoriesGateway {
  findAll(userId: string): Promise<CategoriesResponse[]>;
}
