import { getListTicketType } from "@/lib/ticket-type";

import TicketTable from "./ticket-table";

const TicketType = async () => {
  let listTicketType = await getListTicketType();
  return (
    <div className="w-full p-4">
      <TicketTable data={listTicketType} />
    </div>
  );
};

export default TicketType;
