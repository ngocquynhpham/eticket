// chiu trach nhiem nhan data tu client => lib/ticket-type
'use server'

import { createTicket, getListTicket } from "@/lib/ticket";
import { Ticket } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function actionGetTicketList() {
    return await getListTicket();
}
export async function actionCreateTicket(ticket:Partial<Ticket>) {
     await createTicket(ticket);
    revalidatePath("/tickets");
}