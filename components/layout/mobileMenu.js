"use client";
import React, { useState } from "react";
import {
  Coins,
  FileSearch,
  Home,
  LogOut,
  Menu,
  Moon,
  Stethoscope,
  UserCog,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown";

import { useTheme } from "next-themes";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const { setTheme } = useTheme();

  //SIMULATE GETTING TOKENS FROM USER
  const userTokens = "400";
  return (
    <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link className="flex w-full" href={"/dashboard"}>
              <Home className="mr-2" size={20} />
              <span>Home</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex w-full" href={"/professionals"}>
              <Stethoscope className="mr-2" size={20} />
              <span>Professionals</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex w-full" href={"/candidates"}>
              <FileSearch className="mr-2" size={20} />
              <span>Candidates</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex" href={"/account"}>
              <UserCog className="mr-2" size={20} />
              <span>Your Account</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="flex w-full" href={"/account/charge"}>
            <Coins className="mr-2 text-accent" size={20} />
            <span>
              Your tokens: <b className="text-accent">{userTokens}</b>
            </span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Moon className="mr-2" size={20} />
              <span>Theme Toggle</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="flex w-full" href={"/"}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
