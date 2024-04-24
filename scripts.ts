import { PrismaClient } from "@prisma/client";
import { fakeTicketComplete } from "./types/fake-data";

const prisma = new PrismaClient();

// A `main` function so that we can use async/await
async function main() {
  for(let i = 0; i < 20; i++){
    await prisma.ticket.create({
        data: fakeTicketComplete()
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
