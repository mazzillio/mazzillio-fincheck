import { Injectable } from '@nestjs/common';
import { CategoriesResponse } from "@application/domain/dto/out/categories-response.dto";
import { CategoriesGateway } from "@application/domain/gateways/categories.gateway";
import { CategoriesMapper } from "@application/domain/mappers/CategoriesMap";
import { PrismaService } from "@config/prisma.service";

@Injectable()
export class CategoriesPrismaRepositoryGateway implements CategoriesGateway {
    constructor(private readonly prismaService: PrismaService) {}
    async findAll(userId: string): Promise<CategoriesResponse[]> {
        const categories = await this.prismaService.category.findMany({
            where: {
               userId
            },
        });
        return categories.map(category => CategoriesMapper.toCategoryResponse(category));
    }
}