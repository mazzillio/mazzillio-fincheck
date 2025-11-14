import { Category, User } from '@prisma/client';
import { Categories } from '../entities/categories';
import { CategoriesResponse } from '../dto/out/categories-response.dto';

export class CategoriesMapper {
  static toCategory(category: Category): Category {
    return new Categories(category.id, category.name, category.icon);
  }
  static toCategoryResponse(category: Categories): CategoriesResponse {
    return {
      id: category.id,
      name: category.name,
      icon: category.icon,
    };
  }
}
