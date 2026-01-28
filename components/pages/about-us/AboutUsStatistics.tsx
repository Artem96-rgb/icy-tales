import { type LucideIcon } from "lucide-react";
import TypographyP from "@/components/typography/TypographyP";
import Container from "@/components/Container";
import { SectionTopWrapper } from "@/components/SectionTopTwo";
import TypographyH2 from "@/components/typography/TypographyH2";

interface IAboutUsStatisticsProps {
  list: {
    id: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
  }[];
}

export default function AboutUsStatistics({ list }: IAboutUsStatisticsProps) {
  return (
    <section className="pt-20 lg:pt-35 pb-22.5 lg:pb-37.5">
      <Container size="small" className="relative">
        <SectionTopWrapper>
          <TypographyH2>
            Our <span>Statistics</span>
          </TypographyH2>
          <TypographyP>
            What makes us special through our impressive statistics.
          </TypographyP>
        </SectionTopWrapper>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7.5">
          {list.map((item) => (
            <li
              className="relative rounded-2xl before:content-[''] before:absolute before:size-full before:bg-primary before:rounded-2xl before:top-0.5"
              key={item.id}
            >
              <div className="relative z-10 bg-background text-center shadow-[0px_12px_105px_12px_rgba(0,0,0,0.03)] pt-5.5 lg:pt-10.5 pb-8 lg:pb-13 rounded-2xl">
                <div className="relative mb-4 lg:mb-7 max-w-max mx-auto">
                  <p className="text-3xl lg:text-[44px] leading-none font-berkshireSwash">
                    {item.title}
                  </p>
                  <item.icon
                    className="text-primary absolute top-2.5 -right-4"
                    size={14}
                    strokeWidth={3}
                  />
                </div>

                <TypographyP size="base" className="leading-none">
                  {item.subtitle}
                </TypographyP>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
