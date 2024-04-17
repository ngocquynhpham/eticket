-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,
    "categoryID" INTEGER NOT NULL,
    "departmentID" INTEGER NOT NULL,
    "ticketTypeID" INTEGER NOT NULL,
    CONSTRAINT "Ticket_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_departmentID_fkey" FOREIGN KEY ("departmentID") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_ticketTypeID_fkey" FOREIGN KEY ("ticketTypeID") REFERENCES "TicketType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
