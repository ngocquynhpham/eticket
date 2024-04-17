// chiu trach nhiem giao tiep voi database = ORM query
import { StatusTicket } from "@prisma/client";
import prisma from "./db";

export async function getListStatus() {
  return await prisma.statusTicket.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function createStatusTicket(dataStatusTicket: Partial<StatusTicket>) {
  const statusTicket = await prisma.statusTicket.create({
    data: {
      name: dataStatusTicket.name!,
      isActive: dataStatusTicket.isActive,
      note: dataStatusTicket.note,
    },
  });
  return statusTicket;
}
export async function updateStatusTicket(dataStatusTicket: StatusTicket) {
  const statusTicket = await prisma.statusTicket.update({
    where: {
      id: dataStatusTicket.id,
    },
    data: dataStatusTicket,
  });
  return statusTicket;
}
export async function deleteStatusTicket(id: number) {
  const statusTicket = await prisma.statusTicket.delete({
    where: {
      id: id,
    },
  });
  return statusTicket;
}
