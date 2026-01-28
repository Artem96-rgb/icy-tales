"use client";

import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { mobileMenuItems } from "@/data/menu-mobile";
import { useClickOutside } from "@/hooks";
import Logo from "@/components/ui/logo";

export default function MobileMenuClient() {
  // Reference to the search container element (used for click outside detection)
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useClickOutside(menuRef, () => {
    setIsMobileMenuOpen(false);
  });

  return (
    <>
      <Button
        type="button"
        className="text-right lg:hidden"
        // variant="transparent"
        size="icon-sm"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu />
      </Button>

      <div
        className={`fixed inset-y-0 h-screen left-0 w-full z-40 bg-black/70 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className={`max-w-100 gradient h-screen py-2 px-5 space-y-5 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} `}
          ref={menuRef}
        >
          <div className="flex justify-between items-start gap-2">
            <Logo
              image={{
                url: "/header-logo.png",
                alt: "",
                width: 42,
                height: 70,
              }}
            />

            <Button
              type="button"
              className="text-right lg:hidden"
              size="icon-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size="18" />
            </Button>
          </div>

          <NavigationMenu className="justify-start" viewport={false}>
            <NavigationMenuList className="gap-5 flex-col justify-start items-start">
              {mobileMenuItems?.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {item.submenu.map((sub) => (
                          <NavigationMenuLink
                            key={sub.href}
                            href={sub.href}
                            className="hover:bg-primary hover:text-background px-5 py-2.5"
                          >
                            {sub.label}
                          </NavigationMenuLink>
                        ))}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink href={item.href}>
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
