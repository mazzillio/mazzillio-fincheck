import { CategoriesResponse } from "@application/domain/dto/out/categories-response.dto";

export interface CategoriesAdapter {
    findAll(userId: string): Promise<CategoriesResponse[]>;
}