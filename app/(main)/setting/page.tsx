import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TicketType from "./_components/ticket-type/ticket-type-page";
import DepartmentPage from "./_components/department/department-page";
import CategoryPage from "./_components/category/category-page";
import TicketStatus from "./_components/ticket-status/ticket-status-page";

const Setting = () => {
  return (
    <div className="body-main">
      <Tabs defaultValue="ticket_type" className="w-full">
        <TabsList className="w-full flex">
          <TabsTrigger className="w-full" value="ticket_type">
            Ticket Type
          </TabsTrigger>
          <TabsTrigger className="w-full" value="department">
            Department
          </TabsTrigger>
          <TabsTrigger className="w-full" value="category">
            Category
          </TabsTrigger>
          <TabsTrigger className="w-full" value="status">
            Status
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ticket_type">
          <TicketType />
        </TabsContent>
        <TabsContent value="department">
          <DepartmentPage />
        </TabsContent>
        <TabsContent value="status">
          <TicketStatus />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Setting;
