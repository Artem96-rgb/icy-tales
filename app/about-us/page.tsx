import HeroSection from "@/components/pages/general/HeroSection";
import AboutUsPromo from "@/components/pages/about-us/AboutUsPromo";
import AboutUsStatistics from "@/components/pages/about-us/AboutUsStatistics";
import { Plus, Percent } from "lucide-react";
import AboutUsMission from "@/components/pages/about-us/AboutUsMission";
import AboutUSOurTeam from "@/components/pages/about-us/AboutUSOurTeam";
import SignUp from "@/components/pages/general/SignUp";

const statistics = [
  {
    id: "statistics-one",
    title: "91",
    subtitle: "Awards Win",
    icon: Plus,
  },
  {
    id: "statistics-two",
    title: "95",
    subtitle: "Satisfied Clients",
    icon: Percent,
  },
  {
    id: "statistics-three",
    title: "48",
    subtitle: "Years of Experience",
    icon: Plus,
  },
  {
    id: "statistics-four",
    title: "143",
    subtitle: "Employees Working",
    icon: Plus,
  },
];

const breadcrumbs = [
  {
    id: "breadcrumb-about-us",
    title: "About Us",
    link: null,
  },
];

export default function AboutUsPage() {
  return (
    <div>
      <HeroSection title="About Us" breadcrumbs={breadcrumbs} />

      <AboutUsPromo />

      <AboutUsMission
        image={{
          url: "/pages/about-us/about-us-mission.jpg",
          alt: "Mission",
          width: 1200,
          height: 675,
        }}
        title="Our Mission is to Create Moments"
        description="We strive to foster a welcoming and joyful environment
          where customers of all ages can gather, celebrate, and
          make lasting memories. Our commitment extends beyond
          serving great ice cream."
        link={{
          href: "/",
          title: "Read More",
        }}
      />

      <AboutUsStatistics list={statistics} />

      <AboutUSOurTeam />

      <SignUp />
    </div>
  );
}
