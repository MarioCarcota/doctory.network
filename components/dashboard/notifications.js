"use client";

import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/Button";
import { Bell, Clock, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/PopOver";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { Separator } from "../ui/Separator";
import Link from "next/link";

function Notifications() {
  const [mounted, setMounted] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // FAKE RETRIEVING THE NOTIFICATIONS OF THE USER
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "@mariocarcota",
      message: "Accepted your offer!",
      time: "23 Minutes ago",
      avatar: "https://github.com/shadcn.png",
      link: "mariocarcota",
    },
    {
      id: 2,
      user: "@alexwatson",
      message: "Wait's for your reply!",
      time: "2 Hours ago",
      avatar:
        "https://images.unsplash.com/photo-1625563015139-548b27ea5767?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "alexwatson",
    },
    {
      id: 3,
      user: "@theoturner",
      message: "Refused your offer!",
      time: "1 Day ago",
      avatar:
        "https://images.unsplash.com/photo-1576671494903-8e2bb9327205?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "theoturner",
    },
  ]);

  const numNotifications = notifications.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
    if (notifications.length === 1) {
      // If this is the last notification, close the popover
      setIsPopoverOpen(false);
    }
  };

  // Only render Popover after the component has mounted to avoid SSR issues
  if (!mounted) {
    return null;
  }

  return (
    <Popover onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            buttonVariants({ variant: "outline" }),
            "relative flex items-center gap-3 cursor-pointer"
          )}
          onClick={(e) => {
            if (numNotifications === 0) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          <div
            className={cn(
              "transition-all duration-300 flex items-center gap-2",
              isPopoverOpen
                ? "opacity-0 scale-75 translate-x-4"
                : "opacity-100 scale-100 translate-x-0"
            )}
          >
            <span
              className={cn(
                "transition-all md:block hidden duration-300 text-base",
                isPopoverOpen
                  ? "opacity-0 scale-75 translate-x-4"
                  : "opacity-100 scale-100 translate-x-0"
              )}
            >
              {numNotifications > 0
                ? "You have new updates!"
                : "You are all up to date!"}
            </span>
            <div className="relative">
              <Bell size={18} />
              {numNotifications > 0 && (
                <span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full bg-red-600" />
              )}
            </div>
          </div>
          {isPopoverOpen && numNotifications > 0 && (
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-300",
                isPopoverOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
              )}
            >
              <X size={18} />
            </div>
          )}
        </div>
      </PopoverTrigger>
      {numNotifications > 0 && (
        <PopoverContent align="end" className="w-full mt-2 shadow">
          {notifications.map((notification, index) => (
            <div key={notification.id}>
              <div className="flex flex-row justify-between gap-3">
                <div className="flex flex-row gap-3">
                  <Avatar>
                    <AvatarImage
                      src={notification.avatar}
                      alt={notification.user}
                    />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>

                  <div>
                    <h4>
                      <Link
                        href={"/professionals/" + notification.link}
                        className="font-semibold hover:underline"
                      >
                        {notification.user}
                      </Link>{" "}
                      {notification.message}
                    </h4>
                    <div className="flex mt-1 text-xs text-muted-foreground items-center flex-row gap-1">
                      <Clock size={14} /> {notification.time}
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeNotification(notification.id)}
                >
                  <X size={16} />
                </Button>
              </div>

              {/* Only show the separator if this is not the last notification */}
              {index < notifications.length - 1 && (
                <Separator
                  orientation="horizontal"
                  className="w-full h-[1px] my-4"
                />
              )}
            </div>
          ))}
        </PopoverContent>
      )}
    </Popover>
  );
}

export default Notifications;
