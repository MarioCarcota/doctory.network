"use client";
import React, { useState } from "react";
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
import { CommandCLI } from "../command-cli/CommandLine";

function NavBar() {
  // SIMULATED AUTH CONTEXT PROVIDER
  const currentPath = usePathname();
  return <>{currentPath !== "/" && <DockPlatform />}</>;
}

const DATA = [
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
];

function DockPlatform() {
  //SIMULATE GETTING TOKENS FROM USER
  const userTokens = "400";

  return (
    <>
      <div className="z-50 md:w-fit fixed bottom-8 -left-1 md:left-1/2 transform -translate-x-1/2 scale-90 md:scale-125 hidden md:flex h-fit w-full flex-col">
        <TooltipProvider>
          <Dock direction="middle">
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={"/dashboard"}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <HomeIcon size={20} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Home</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
            <DockIcon>
              <CommandCLI>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <Terminal size={24} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Terminal</p>
                  </TooltipContent>
                </Tooltip>
              </CommandCLI>
            </DockIcon>
            <Separator orientation="vertical" className="h-full" />
            {DATA.map((item) => (
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
    </>
  );
}

export default NavBar;
