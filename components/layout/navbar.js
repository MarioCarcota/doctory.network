"use client";
import React from "react";
import Link from "next/link";
import {
  CalendarIcon,
  Coins,
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
      label: "Candidates",
      href: "/candidates",
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
  //SIMULATE GETTING TOKENS FROM USER
  const userTokens = "400";

  return (
    <div className="fixed bottom-8 -left-1 md:left-0 scale-90 md:scale-125 hidden md:flex h-fit w-full flex-col">
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
                      "size-12 rounded-full"
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
                      "size-12 rounded-full"
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
          <DockIcon className={"px-10"}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/account/charge"}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "flex gap-2 text-accent  rounded-xl p-2"
                  )}
                >
                  <Coins /> {userTokens || 0}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tokens</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
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
