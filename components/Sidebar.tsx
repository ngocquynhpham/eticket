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
    { id: 1, name: "My Tickets", icon: <Ticket />, url: "/tickets" }, // End user sẽ thấy: Ds + Dashboard
    { id: 2, name: "Need Handle", icon: <Ticket />, url: "/need-handle" }, // End user sẽ thấy: Ds + Dashboard
    { id: 3, name: "Setting", icon: <Settings />, url: "/setting" }, // Nếu Admin sẽ thấy
  ];
  const pathname = usePathname();
  return (
    <div className="sidebar">
      <div className="sidebar__head">
        <TicketCheck /> WinTicket
      </div>
      <div className="sidebar__body">
        {listMenu.map((item, index) => {
          return (
            <Link
              href={item.url}
              className={`itemMenu ${pathname === item.url ? "active" : ""}`}
              key={item.id}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="sidebar__foot">
        <Link href={"/create-ticket"} className="btn-create">
          <CirclePlus />
          Create New
        </Link>
        <UserButton />
        <span className="version">@HelpDesk v.1.1.1</span>
      </div>
    </div>
  );
};

export default Sidebar;
