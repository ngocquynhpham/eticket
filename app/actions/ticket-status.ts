// chiu trach nhiem nhan data tu client => lib/statusTicket
'use server'

import { createStatusTicket, deleteStatusTicket, getListStatus, updateStatusTicket } from "@/lib/ticket-status";
import { StatusTicket } from "@prisma/client"
import { revalidatePath } from "next/cache";

export async function actionGetStatus() {
   return await getListStatus();
    
}
export async function actionCreateStatusTicket(statusTicket: Partial<StatusTicket>) {
    await createStatusTicket(statusTicket);
    revalidatePath("/setting");
}

export async function actionUpdateStatusTicket(statusTicket: StatusTicket) {
    await updateStatusTicket(statusTicket);
    revalidatePath("/setting");
}

export async function actionDeleteStatusTicket(statusTicket: StatusTicket) {
    await deleteStatusTicket(statusTicket.id);
    revalidatePath("/setting");
}