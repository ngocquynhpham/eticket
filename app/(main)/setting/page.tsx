import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TicketType from "./_components/ticket-type/ticket-type-page";
import DepartmentPage from "./_components/department/department-page";
import CategoryPage from "./_components/category/category-page";
import TicketStatus from "./_components/ticket-status/ticket-status-page";


const Setting = () => {
  return (
    <div className="body-main overflow-hidden">
       <Tabs
            defaultValue="ticket_type"
            className="overflow-hidden"
          >
            <TabsList className="flex justify-start overflow-x-auto max-w-[calc(100dvw-100px)]">
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
            <TabsContent className="w-full flex overflow-auto h-full max-w-[calc(100dvw-60px)] max-h-[calc(100dvh-70px)]" value="ticket_type">
              <TicketType />
            </TabsContent>
            <TabsContent className="w-full flex overflow-auto h-full max-w-[calc(100dvw-60px)] max-h-[calc(100dvh-70px)]" value="department">
              <DepartmentPage />
            </TabsContent>
            <TabsContent className="w-full flex overflow-auto h-full max-w-[calc(100dvw-60px)] max-h-[calc(100dvh-70px)]" value="category">
              <CategoryPage />
            </TabsContent>
            <TabsContent className="w-full flex overflow-auto h-full max-w-[calc(100dvw-60px)] max-h-[calc(100dvh-70px)]" value="status">
              <TicketStatus />
            </TabsContent>
          </Tabs>
    </div>
  );
};

export default Setting;
