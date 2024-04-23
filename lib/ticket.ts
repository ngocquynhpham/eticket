// chiu trach nhiem giao tiep voi database = ORM query
import { Ticket } from "@prisma/client";
import prisma from "./db";
import { getCurrentUser } from "./user";

export async function getListTicket() {
   return await prisma.ticket.findMany({
      orderBy: { //sort stt
         id: "desc"
      },
      include: {
         status: true
      }
   });
}
export async function getTicketDetail(idTicket: number) {
   return await prisma.ticket.findUnique({
      where: {
         id: idTicket
      }
   });
}
export async function createTicket(ticket: any) {
   let user = await getCurrentUser();
   let user_id = user?.id;
   return await prisma.ticket.create({
      data: {
         ...ticket,
         userID: user_id,
      },
   })
}