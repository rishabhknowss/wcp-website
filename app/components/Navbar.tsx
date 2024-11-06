import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandYoutubeFilled,
  IconBrandWhatsapp,
  IconHome,
  IconPhone,
  IconMail,
  IconBrandInstagram,
  IconBrandGooglePhotos
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Website",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Call",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Gallery",
      icon: (
        <IconBrandGooglePhotos className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/gallery",
    },
   
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Youtube",
      icon: (
        <IconBrandYoutubeFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="floating-dock-fixed">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
