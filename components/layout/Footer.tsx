import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/ui/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Container from "@/components/Container";
import SocialList from "@/components/social/SocialList";
import SocialItem from "@/components/social/SocialItem";
import { socialData } from "@/data/social-data";
import BackToTop from "@/components/BackToTop";

export default function Footer() {
  const menuItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Blog", href: "/blog" },
    { label: "Shop", href: "/shop" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const contactItems = [
    {
      type: null,
      label: "Address:",
      value: "121 King Street Melbourne, 3000, Australia",
      icon: MapPin,
    },
    {
      type: "email",
      label: "Email:",
      value: "info@example.com",
      icon: Mail,
    },
  ];

  return (
    <footer
      className="bg-secondary text-white relative bg-no-repeat bg-bottom-left"
      style={{ backgroundImage: `url('/footer-image.png')` }}
    >
      <Container className="py-5 md:py-15 lg:py-25">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Logo */}
          <Logo variant="secondary" className="text-white order-1" />

          {/* Navigation */}
          <div className="order-3 lg:order-2">
            <h3 className="text-22 leading-none font-semibold mb-6.5">
              Navigation
            </h3>

            <NavigationMenu className="justify-start">
              <NavigationMenuList className="grid grid-cols-[1fr_1fr] gap-10">
                {menuItems.map((item) => (
                  <NavigationMenuItem
                    key={item.label}
                    className="before:content-[''] before:bg-primary before:w-1.5 before:h-1.5 before:rounded-full before:block flex-y-center gap-4.5"
                  >
                    <NavigationMenuLink
                      href={item.href}
                      className="text-sm/3.5"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Address */}
          <div className="space-y-6 order-4 lg:order-3">
            {contactItems?.map((contactItem) => (
              <div className="flex gap-5.5" key={contactItem.label}>
                <div className="bg-white/10 shrink-0 basis-11.5 h-11.5 flex-center rounded-full">
                  <contactItem.icon className="text-white" size={20} />
                </div>

                <div>
                  <p className="font-semibold text-base text-white mb-2 leading-none">
                    {contactItem.label}
                  </p>

                  {contactItem.type === "email" ? (
                    <a
                      href={`mailto:${contactItem.value}`}
                      className="text-sm text-secondary-10"
                    >
                      {contactItem.value}
                    </a>
                  ) : (
                    <p className="text-sm text-secondary-10">
                      {contactItem.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}

          <div className="space-y-7.5 order-2 lg:order-4">
            <div className="flex gap-4.5">
              <Phone
                className="text-white shrink-0 fill-white rotate-270"
                size={30}
              />

              <div>
                <a
                  href="tel:+123456780123"
                  className="font-bold text-xl text-white mb-1.5 leading-none"
                >
                  +123456780123
                </a>

                <p className="text-sm text-secondary-10">
                  Got Questions? Call us 24/7
                </p>
              </div>
            </div>

            <SocialList>
              {socialData.map((item) => (
                <SocialItem key={item.id}>sdf</SocialItem>
              ))}
            </SocialList>
          </div>
        </div>
      </Container>

      <Container>
        {/* Divider */}
        <div className="py-4.5 border-t border-white/15">
          <p className="text-xs text-secondary-10 leading-none text-center">
            Copyright © 2024 BlackRise Themes Inc. All rights reserved.
          </p>
        </div>
      </Container>

      {/* Scroll to top */}
      <BackToTop />
    </footer>
  );
}
