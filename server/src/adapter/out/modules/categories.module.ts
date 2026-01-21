import { Module } from '@nestjs/common';
import { CategoriesController } from '../categories.controller';
import { CategoriesService } from '@application/domain/services/categories.service';
import { CategoriesPrismaRepositoryGateway } from '../persistence/repository/categories-prisma.repository';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    {
      provide: 'CategoriesGatewayInterface',
      useClass: CategoriesPrismaRepositoryGateway,
    },
  ],
})
export class CategoriesModule {}
