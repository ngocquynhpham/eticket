// chiu trach nhiem giao tiep voi database = ORM query
import { Category } from "@prisma/client";
import prisma from "./db";

export async function getListCategory() {
   return await prisma.category.findMany({
    orderBy: {
        id: "asc"
    }
   });
}
 
export async function createCategory(dataCategory: Partial<Category>) {
  const category = await prisma.category.create({
    data: {
      name: dataCategory.name!,
      isActive: dataCategory.isActive,
      note: dataCategory.note,
    },
  });
  return category;
}
export async function updateCategory(dataCategory: Category) {
  const category = await prisma.category.update({
    where: {
      id: dataCategory.id,
    },
    data: dataCategory,
  });
  return category;
}
export async function deleteCategory(id: number) {
  const category = await prisma.category.delete({
    where: {
      id: id,
    },
  });
  return category;
}
