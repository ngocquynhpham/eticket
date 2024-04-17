// chiu trach nhiem giao tiep voi database = ORM query
import exp from "constants";
import prisma from "./db";
import { currentUser } from "@clerk/nextjs";

export async function getListUser() {
   return await prisma.user.findMany({
      orderBy: { //sort stt
         id: "desc"
      },

   });
}

export async function getCurrentUser() {
   const user = await currentUser();
   if (!user) {
      throw new Error("Chưa đăng nhập !!!")
   }
   else {
      console.log(user.id)
      return await prisma.user.findFirst({
         where: {
            externalId: user.id
         }
      })
   }
}

