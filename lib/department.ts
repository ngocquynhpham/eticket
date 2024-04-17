// chiu trach nhiem giao tiep voi database = ORM query
import { Department } from "@prisma/client";
import prisma from "./db";

export async function getListDepartment() {
  return await prisma.department.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function createDepartment(dataDepartment: Partial<Department>) {
  const department = await prisma.department.create({
    data: {
      name: dataDepartment.name!,
      isActive: dataDepartment.isActive,
      note: dataDepartment.note,
    },
  });
  return department;
}
export async function updateDepartment(dataDepartment: Department) {
  const department = await prisma.department.update({
    where: {
      id: dataDepartment.id,
    },
    data: dataDepartment,
  });
  return department;
}
export async function deleteDepartment(id: number) {
  const department = await prisma.department.delete({
    where: {
      id: id,
    },
  });
  return department;
}
