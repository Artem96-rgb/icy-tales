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

      <AboutUsMission />

      <AboutUsStatistics list={statistics} />

      <AboutUSOurTeam />

      <SignUp />
    </div>
  );
}
