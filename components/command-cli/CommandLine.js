"use client";
import * as React from "react";
import {
  Calculator,
  Calendar,
  FileSearch,
  Flame,
  Home,
  Reply,
  Smile,
  SquarePlay,
  Stethoscope,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/Command";
import { useRouter } from "next/navigation";

export function CommandCLI({ children }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleRedirect = (path) => {
    if (path) {
      router.push(path);
      setOpen(false);
    }
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type your search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => handleRedirect("/candidates")}>
              <SquarePlay className="mr-2 h-4 w-4" />
              <span>Start the onboarding with the hired candidates</span>
            </CommandItem>
            <CommandItem onSelect={() => handleRedirect("/candidates")}>
              <Reply className="mr-2 h-4 w-4" />
              <span>Reply to the candidates</span>
            </CommandItem>
            <CommandItem onSelect={() => handleRedirect("/professionals")}>
              <Flame className="mr-2 h-4 w-4" />
              <span>See the hot & new candidates</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Shortcuts">
            <CommandItem onSelect={() => handleRedirect("/dashboard")}>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem onSelect={() => handleRedirect("/professionals")}>
              <Stethoscope className="mr-2 h-4 w-4" />
              <span>Professionals</span>
            </CommandItem>
            <CommandItem onSelect={() => handleRedirect("/candidates")}>
              <FileSearch className="mr-2 h-4 w-4" />
              <span>Candidates</span>
            </CommandItem>
            <CommandItem onSelect={() => handleRedirect("/account")}>
              <User className="mr-2 h-4 w-4" />
              <span>Account</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
