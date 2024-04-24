"use client";
import {
  ArrowRight,
  CirclePlus,
  LayoutDashboard,
  Plus,
  Settings,
  Ticket,
  TicketCheck,
} from "lucide-react";
import React from "react";
import "./Sidebar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  const listMenu = [
    { id: 0, name: "Dashboard", icon: <LayoutDashboard />, url: "/" }, // Nếu Admin sẽ thấy
    {
      id: 1,
      name: "Tickets",
      icon: <Ticket />,
      url: "/tickets",
      hasChild: true,
    }, // End user sẽ thấy: Ds + Dashboard
    { id: 2, name: "Setting", icon: <Settings />, url: "/setting" }, // Nếu Admin sẽ thấy
  ];
  const pathname = usePathname();
  return (
    <div className="sidebar w-20 sm:w-full">
      <div className="sidebar__head">
        <TicketCheck /> <span className="hidden sm:inline">Helpdesk</span>
      </div>
      <div className="sidebar__body">
        {listMenu.map((item, index) => {
          return (
            <Link
              href={item.url}
              className={`itemMenu ${
                pathname === item.url ||
                (pathname.includes("ticket/") && item.hasChild)
                  ? "active"
                  : ""
              }`}
              key={item.id}
            >
              <span>{item.icon}</span>
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="sidebar__foot">
        <Link href={"/create-ticket"} className="btn-create">
          <CirclePlus />
         <span className="hidden sm:inline"> Create New</span>
        </Link>
        <UserButton />
        <span className="hidden sm:inline"><span className="version">@HelpDesk v.1.1.1</span></span>
      </div>
    </div>
  );
};

export default Sidebar;
