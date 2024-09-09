import {
  CheckCircledIcon,
  CrossCircledIcon,
  StarIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";

import { Flame, MessageCircleDashed, Rss, Send } from "lucide-react";

export const statuses = [
  {
    value: "new",
    label: "New",
    icon: Rss,
    bg: "bg-violet-800",
  },
  {
    value: "hot",
    label: "Hot",
    icon: Flame,
    bg: "bg-red-500",
  },
  {
    value: "viewed",
    label: "Viewed",
    icon: EyeOpenIcon,
    bg: "bg-primary",
  },
  {
    value: "starred",
    label: "Starred",
    icon: StarIcon,
    bg: "bg-amber-600",
  },
  {
    value: "messaged",
    label: "Messaged",
    icon: MessageCircleDashed,
    bg: "bg-green-500",
  },
  {
    value: "offer-sent",
    label: "Offer Sent",
    icon: Send,
    bg: "bg-yellow-800",
  },
  {
    value: "hired",
    label: "Hired",
    icon: CheckCircledIcon,
    bg: "bg-green-900",
  },
  {
    value: "declined",
    label: "Declined",
    icon: CrossCircledIcon,
    bg: "bg-red-900",
  },
];
