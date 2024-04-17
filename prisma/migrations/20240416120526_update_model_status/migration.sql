/*
  Warnings:

  - Added the required column `statusID` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "StatusTicket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "note" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,
    "statusID" INTEGER NOT NULL,
    "categoryID" INTEGER NOT NULL,
    "departmentID" INTEGER NOT NULL,
    "ticketTypeID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "term" BOOLEAN NOT NULL,
    CONSTRAINT "Ticket_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_statusID_fkey" FOREIGN KEY ("statusID") REFERENCES "StatusTicket" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_departmentID_fkey" FOREIGN KEY ("departmentID") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_ticketTypeID_fkey" FOREIGN KEY ("ticketTypeID") REFERENCES "TicketType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ticket" ("categoryID", "content", "departmentID", "id", "subject", "term", "ticketTypeID", "userID") SELECT "categoryID", "content", "departmentID", "id", "subject", "term", "ticketTypeID", "userID" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
