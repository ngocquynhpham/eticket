// chiu trach nhiem nhan data tu client => lib/department
'use server'

import { createDepartment, deleteDepartment, getListDepartment, updateDepartment } from "@/lib/department"
import { Department } from "@prisma/client"
import { revalidatePath } from "next/cache";

export async function actionGetDepartment() {
   return await getListDepartment();
    
}
export async function actionCreateDepartment(department: Partial<Department>) {
    await createDepartment(department);
    revalidatePath("/setting");
}

export async function actionUpdateDepartment(department: Department) {
    await updateDepartment(department);
    revalidatePath("/setting");
}

export async function actionDeleteDepartment(department: Department) {
    await deleteDepartment(department.id);
    revalidatePath("/setting");
}