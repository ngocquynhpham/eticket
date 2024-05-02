import React from "react";
import "./page.scss";
import { actionGetTicketDetail } from "@/app/actions/ticket";
import { redirect } from "next/navigation";

import { FileText, TicketCheckIcon, Undo2 } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { formatDate, formatFullTime } from "@/utils/datetime";

const TicketDetail = async ({ params }: { params: { id: string } }) => {
  let ticket = await actionGetTicketDetail(parseInt(params.id));
  if (ticket === null) {
    redirect(`/404`);
  }
  return (
    <div className="flex flex-col items-center w-full py-4 px-8">
      <div className="flex w-full gap-2">
        <Link href={"/tickets"} className="flex gap-2 items-center items-center">
          <Undo2 strokeWidth={2.5} size={18} className="text-primary" />{" "}
          <Label className="text-primary cursor-pointer">Back</Label>
        </Link>
      </div>
      <div className="flex justify-center items-center w-full gap-2">
        <FileText strokeWidth={2.5} size={30} className="text-primary" />
        <h1 className="text-primary font-bold text-xl">{ticket.subject}</h1>
      </div>
      <div className="main-detail">
        <div className="flex gap-2 items-center">
          <span className="text-gray-500">Create at: </span>
          <span>
            {formatDate(ticket.createdAt)} - {formatFullTime(ticket.createdAt)}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-500">Create by: </span>
          <span>{ticket.user.name}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-500">Department: </span>
          <span>{ticket.department.name}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-500">Ticket Type: </span>
          <span>{ticket.ticketType.name}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-500">Category: </span>
          <span>{ticket.category.name}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-500">Status: </span>
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
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-gray-500">Support Content: </span>
          <span className="py-4 px-4 rounded-sm border-orange-400 border">{ticket.content}</span>
        </div>
      </div>
    </div>
  );
};
export default TicketDetail;
