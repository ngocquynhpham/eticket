import { actionGetTicketList } from "@/app/actions/ticket";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlignLeft, ArrowRight, FileText } from "lucide-react";
import { Ticket } from "@prisma/client";
import { formatDate, formatTime } from "@/utils/datetime";

const Tickets = async () => {
  let tickets = await actionGetTicketList();
  return (
    <div className="body-main p-8 grid gap-8 grid-cols-1 sm:grid-cols-3 mx-auto">
      {tickets.map((ticket, index: any) => {
        console.log("ticket.content ", ticket.subject, !!ticket.content);
        return (
          <Card key={index} className={"col-span-1"}>
            <CardHeader>
              <CardTitle className="flex gap-1 items-center text-primary text-md">
                <FileText size={18} />
                {ticket.subject.toUpperCase()}
              </CardTitle>
              <CardDescription>{`${formatDate(
                ticket.createdAt
              )} at ${formatTime(ticket.createdAt)}`}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Description
                  </p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {ticket.content ? ticket.content.toLowerCase() : "No content"}
                  </p>
                </div>
              </div>

              {ticket.statusID === 1 && (
                <span className="text-xs rounded-md border px-4 py-2 w-fit text-primary border-primary">
                  {ticket.status.name}
                </span>
              )}
              {ticket.statusID === 2 && (
                <span className="text-xs rounded-md border px-4 py-2 w-fit text-green-500 border-green-500">
                  {ticket.status.name}
                </span>
              )}
              {ticket.statusID === 3 && (
                <span className="text-xs rounded-md border px-4 py-2 w-fit text-red-500 border-red-500">
                  {ticket.status.name}
                </span>
              )}
              {ticket.statusID === 4 && (
                <span className="text-xs rounded-md border px-4 py-2 w-fit text-amber-500 border-amber-500">
                  {ticket.status.name}
                </span>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2">
                See detail <ArrowRight strokeWidth={2} size={20} />
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Tickets;
