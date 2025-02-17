"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@workspace/ui/components/sidebar";

import { menu, link } from "@config/menu.json";

import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="mt-5 ml-3 mr-3">
        <p className="font-semibold">{menu.title}</p>
      </SidebarHeader>
      <SidebarContent className="pl-3 pr-3 flex-col ">
        <Button className="flex-col">
          <Link href={link.home}>{menu.home}</Link>
        </Button>
        <Button className="flex-col">
          <Link href={link.stock}>{menu.stock} </Link>
        </Button>
        <Button className="flex-col">
          <Link href={link.admin}>{menu.admin} </Link>
        </Button>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
