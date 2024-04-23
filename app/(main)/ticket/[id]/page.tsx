import { actionGetTicketDetail } from "@/app/actions/ticket";
import { getListTicket } from "@/lib/ticket";
import React from "react";

const TicketDetail = async ({ params }: { params: { id: string } }) => {
  let content = "Hello world :)))";
  let isFlag = false;
  if (params.id === "helloworld") {
    isFlag = true;
  }
  let ticket = await actionGetTicketDetail(parseInt(params.id));
  if (ticket === null) {
  }
  console.log("ticket", ticket);
  return <>{isFlag && <div>{content}</div>}</>;
};
export default TicketDetail;
