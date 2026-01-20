import HeroSection from "@/components/pages/general/HeroSection";
import AboutUsPromo from "@/components/pages/about-us/AboutUsPromo";
import AboutUsStatistics from "@/components/pages/about-us/AboutUsStatistics";
import { Plus, Percent } from "lucide-react";
import AboutUsMission from "@/components/pages/about-us/AboutUsMission";
import Container from "@/components/Container";
import {
  SectionTopSubTitle,
  SectionTopTitle,
  SectionTopWrapper,
  SectionTopHighlightedText,
} from "@/components/SectionTopTwo";

export default function AboutUsPage() {
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
  return (
    <div>
      <HeroSection title="About Us" />

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

      <section className="pt-20 lg:pt-35 pb-22.5 lg:pb-37.5">
        <Container size="small" className="relative">
          <SectionTopWrapper>
            <SectionTopTitle>
              Our{" "}
              <SectionTopHighlightedText>Statistics</SectionTopHighlightedText>
            </SectionTopTitle>
            <SectionTopSubTitle>
              What makes us special through our impressive statistics.
            </SectionTopSubTitle>
          </SectionTopWrapper>

          <AboutUsStatistics list={statistics} />
        </Container>
      </section>
    </div>
  );
}
