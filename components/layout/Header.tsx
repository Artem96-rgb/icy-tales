"use client";

import Logo from "@/components/ui/logo";
import { Search, ShoppingBag, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { menuItems } from "@/data/header-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-5.5">
      <Container className="flex-y-center justify-between gap-2.5 flex-wrap">
        <div className="flex gap-2">
          <button
            type="button"
            className="text-right lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size="32" />
          </button>

          <Logo />
        </div>

        <div
          className={`lg:justify-end lg:mr-19 lg:flex-1 max-lg:fixed max-lg:inset-0 max-lg:z-40 max-lg:bg-black/70 transition-transform duration-300 ${isMobileMenuOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}`}
        >
          <NavigationMenu
            className="lg:justify-end bg-white max-lg:w-full max-lg:h-full max-lg:max-w-100"
            viewport={false}
          >
            <NavigationMenuList className="gap-10 max-lg:flex-col">
              {menuItems?.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {item.submenu.map((sub) => (
                          <NavigationMenuLink key={sub.href} href={sub.href}>
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
          <Button
            className="border-none absolute top-3 right-3 w-8 h-8 text-black lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={26} />
          </Button>
        </div>

        <div className="flex-y-center gap-13">
          <div className="flex-y-center gap-4">
            <Search size={24} />

            <ShoppingBag size={24} />
          </div>

          <Button asChild>
            <Link href="/contact-us" className="gap-5">
              <span>Contact Us</span>
              <ArrowRight size={12} strokeWidth={3} />
            </Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
