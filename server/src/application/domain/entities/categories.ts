import { TransactionType } from '@prisma/client';

export class Categories {
  id: string;
  userId: string;
  name: string;
  icon: string;
  type: TransactionType;
  constructor(
    name: string,
    icon: string,

    id?: string,
  ) {
    this.id = id;
    this.icon = icon;
    this.name = name;
  }
}
