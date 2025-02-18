"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@workspace/ui/components/sidebar";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@workspace/ui/components/dialog";
import menuData from "@config/menu.json";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="mt-5 ml-3 mr-3">
        <p className="font-semibold">{menuData.menu.title}</p>
      </SidebarHeader>

      <SidebarContent className="pl-3 pr-3 flex flex-col gap-2">
        <Button asChild variant="ghost">
          <Link href={menuData.link.home}>{menuData.menu.home}</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href={menuData.link.stock}>{menuData.menu.stock}</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href={menuData.link.admin}>{menuData.menu.admin}</Link>
        </Button>
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
