"use client";
import React from "react";
import Link from "next/link";
import {
  CalendarIcon,
  FileSearch,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PencilIcon,
  Stethoscope,
  Terminal,
  User,
  UserCog,
  UserSearch,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/Separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Dock, DockIcon } from "../ui/Dock";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/Button";
import { ModeToggle } from "../ui/ThemeToggle";

function NavBar() {
  // SIMULATED AUTH CONTEXT PROVIDER
  const currentPath = usePathname();
  return <>{currentPath !== "/" && <DockPlatform />}</>;
}

const DATA = {
  base: [
    { href: "/dashboard", icon: HomeIcon, label: "Home" },
    { href: "#", icon: Terminal, label: "Terminal", size: 24 },
  ],
  actions: [
    {
      label: "Professionals",
      href: "/professionals",
      icon: Stethoscope,
      size: 22,
    },
    {
      label: "Applications",
      href: "/applications",
      icon: FileSearch,
    },
    {
      label: "Your Account",
      href: "/account",
      icon: UserCog,
      size: 23,
    },
  ],
};

function DockPlatform() {
  return (
    <div className="absolute bottom-5 flex h-fit w-full flex-col">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.base.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-primary hover:text-white"
                    )}
                  >
                    <item.icon size={item.size || 20} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {DATA.actions.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-primary hover:text-white"
                    )}
                  >
                    <item.icon size={item.size || 20} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}

export default NavBar;
