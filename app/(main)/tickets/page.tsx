import { actionGetTicketList } from "@/app/actions/ticket";
import React from "react";
import TicketGrid from "./ticket-grid";
import { actionGetStatus } from "@/app/actions/ticket-status";

const TicketsPage = async () => {
  let tickets = await actionGetTicketList();
  return (
    <div className="w-full p-4">
    <TicketGrid data={tickets}/>
  </div>
  );
};

export default TicketsPage;
