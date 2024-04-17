// chiu trach nhiem nhan data tu client => lib/ticket-type
'use server'

import { createTicketType, deleteTicketType, getListTicketType, updateTicketType } from "@/lib/ticket-type";
import { TicketType } from "@prisma/client";
import { revalidatePath } from "next/cache";
export async function actionGetTicketType() {
    return await getListTicketType();
     
 }
export async function createTicketTypeAction(data:Partial<TicketType>) {
    await createTicketType(data);
    revalidatePath("/setting")
}

export async function updateTicketTypeAction(data:TicketType) {
    await updateTicketType(data);
    revalidatePath("/setting")
}

export async function deleteTicketTypeAction(data:TicketType) {
    await deleteTicketType(data);
    revalidatePath("/setting") ;
}