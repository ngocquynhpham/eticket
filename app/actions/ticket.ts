// chiu trach nhiem nhan data tu client => lib/ticket-type
'use server'

import { createTicket, getListTicket, getTicketDetail } from "@/lib/ticket";
import { Ticket } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function actionGetTicketList() {
    return await getListTicket();
}
export async function actionGetTicketDetail(id:number) {
    return await getTicketDetail(id);
}
export async function actionCreateTicket(ticket:Partial<Ticket>) {
     await createTicket(ticket);
    revalidatePath("/tickets");
}