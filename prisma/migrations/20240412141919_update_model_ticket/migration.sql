/*
  Warnings:

  - You are about to drop the column `name` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `content` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `term` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,
    "categoryID" INTEGER NOT NULL,
    "departmentID" INTEGER NOT NULL,
    "ticketTypeID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "term" BOOLEAN NOT NULL,
    CONSTRAINT "Ticket_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_departmentID_fkey" FOREIGN KEY ("departmentID") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_ticketTypeID_fkey" FOREIGN KEY ("ticketTypeID") REFERENCES "TicketType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ticket" ("categoryID", "departmentID", "id", "ticketTypeID", "userID") SELECT "categoryID", "departmentID", "id", "ticketTypeID", "userID" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
