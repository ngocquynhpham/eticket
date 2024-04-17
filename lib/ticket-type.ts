// chiu trach nhiem giao tiep voi database = ORM query
import { TicketType } from "@prisma/client";
import prisma from "./db";

export async function getListTicketType() {
   return await prisma.ticketType.findMany({
      orderBy: { //sort stt
         id: "desc"
      }
   });
}

export async function updateTicketType(dataTicketType: TicketType) {
   const ticketType = await prisma.ticketType.update({
      where: {
         id: dataTicketType.id,
      },
      data: dataTicketType,
   });
   return ticketType;

}
export async function createTicketType(dataTicketType: Partial<TicketType>) {
   const ticketType = await prisma.ticketType.create({
      data: {
         name: dataTicketType.name!,
         note: dataTicketType.note,
         isActive: dataTicketType.isActive
      },
   });
   return ticketType;
}
export async function deleteTicketType(dataTicketType: TicketType) {
   const ticketType = await prisma.ticketType.delete({
      where: { id: dataTicketType.id },
   });
   return ticketType;
}