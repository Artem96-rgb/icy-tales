"use client";

import Logo from "@/components/ui/logo";
import { Search, ShoppingBag, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

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
import MobileMenuClient from "@/components/MobileMenuClient";
import { useCartStore } from "@/store/cartStore";
import { Badge } from "@/components/ui/badge";
import { useWishlistStore } from "@/store/wishlistStore";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const wishlist = useWishlistStore((state) => state.wishlist);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const shouldBeFixed = isHome || scrolled;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "py-5.5 transition-all duration-300 w-full z-100",
        shouldBeFixed ? "fixed top-0 left-0" : "relative",
        scrolled && "bg-white/50 backdrop-blur-md py-2 shadow-sm",
      )}
    >
      <Container
        size="large"
        className="flex-y-center justify-between gap-2.5 flex-wrap"
      >
        <div className="flex-y-center gap-2">
          <MobileMenuClient />

          <Logo
            image={{
              url: "/header-logo.png",
              alt: "",
              width: 42,
              height: 70,
            }}
          />
        </div>

        <NavigationMenu
          className="justify-end max-lg:hidden lg:mr-19"
          viewport={false}
        >
          <NavigationMenuList className="gap-10">
            {menuItems?.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.submenu ? (
                  <>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
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

        <div className="flex-y-center gap-13">
          <div className="flex-y-center gap-4">
            <Search size={24} />

            <Button
              asChild
              variant="transparent"
              size="sm"
              className="w-8 border-none [&_svg]:size-6 [&_svg]:stroke-2 relative"
            >
              <Link href="/wishlist">
                <Heart />
                <div className="absolute -bottom-0.5 -right-0.5 flex-center">
                  <Badge variant="secondary" className="size-4">
                    {wishlist && wishlist.length > 0 ? wishlist.length : 0}
                  </Badge>
                </div>
              </Link>
            </Button>

            <Button
              asChild
              variant="transparent"
              size="sm"
              className="w-8 border-none [&_svg]:size-6 [&_svg]:stroke-2 relative"
            >
              <Link href="/cart">
                <ShoppingBag />
                <div className="absolute -bottom-0.5 -right-0.5 flex-center">
                  <Badge variant="secondary" className="size-4">
                    {cart && cart.length > 0 ? cart.length : 0}
                  </Badge>
                </div>
              </Link>
            </Button>
          </div>

          <Button asChild className="px-6.5 lg:h-13 max-lg:hidden">
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
