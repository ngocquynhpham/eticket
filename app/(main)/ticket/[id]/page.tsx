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
        <Link href={"/tickets"} className="flex gap-2 items-center">
          <Undo2 strokeWidth={2.5} size={18} className="text-primary" />{" "}
          <Label className="text-primary cursor-pointer">Back</Label>
        </Link>
      </div>
      <div className="flex justify-center items-center w-full gap-2">
        <FileText strokeWidth={2.5} size={30} className="text-primary" />
        <h1 className="text-primary font-bold text-xl">{ticket.subject}</h1>
      </div>
      <div className="main-detail">
        <span>
          Create at: {formatDate(ticket.createdAt)} -{" "}
          {formatFullTime(ticket.createdAt)}
        </span>
        <span>Create by: {ticket.user.name}</span>
        <span>Department: {ticket.department.name}</span>
        <span>Ticket Type: {ticket.ticketType.name}</span>
        <span>Category: {ticket.category.name}</span>
        <span>Status: {ticket.status.name}</span>
        <span>Support Content: {ticket.content}</span>
      </div>
    </div>
  );
};
export default TicketDetail;
