import { getCurrentUser } from "@/lib/user";
import { actionGetCategory } from "../actions/category";
import { actionGetDepartment } from "../actions/department";
import { actionGetTicketType } from "../actions/ticket-type";
import CreateTicketForm from "./create-ticket-form";

const CreateTicket = async () => {
  const dataDepartment = await actionGetDepartment();
  const dataCategory = await actionGetCategory();
  const dataTicketType = await actionGetTicketType();
  const currentUser = await getCurrentUser();
  
  return (
    <CreateTicketForm
      dataSource={{
        department: dataDepartment,
        ticketType: dataTicketType,
        category: dataCategory,
      }}
    />
  );
};

export default CreateTicket;
