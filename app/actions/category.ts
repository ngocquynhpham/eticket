// chiu trach nhiem nhan data tu client => lib/category
'use server'

import { createCategory, deleteCategory, getListCategory, updateCategory } from "@/lib/category"
import { Category } from "@prisma/client"
import { revalidatePath } from "next/cache";


export async function actionGetCategory() {
    return await getListCategory();
     
 }

export async function actionCreateCategory(category: Partial<Category>) {
    await createCategory(category);
    revalidatePath("/setting");
}

export async function actionUpdateCategory(category: Category) {
    await updateCategory(category);
    revalidatePath("/setting");
}

export async function actionDeleteCategory(category: Category) {
    await deleteCategory(category.id);
    revalidatePath("/setting");
}