import Container from "@/components/Container";
import { SectionTopWrapper } from "@/components/SectionTopTwo";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ourTeamData } from "@/data/our-team";
import OurTeamItem from "@/components/OurTeamItem";

export default function AboutUSOurTeam() {
  return (
    <section className="gradient-two pt-12.5 pb-15 md:pt-25 md:pb-27.5 lg:pt-35.5 lg:pb-38">
      <Container size="small">
        <SectionTopWrapper>
          <TypographyH2>
            Our <span>Team</span> Members
          </TypographyH2>
          <TypographyP>
            Get to know the friendly faces behind your favorite flavors.
          </TypographyP>
        </SectionTopWrapper>

        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {ourTeamData?.map((item) => (
              <CarouselItem key={item.id} className="sm:basis-1/2 md:basis-1/3">
                <OurTeamItem
                  avatar={item.avatar}
                  title={item.title}
                  subtitle={item.subtitle}
                  facebookLink={item.facebookLink}
                  instagramLink={item.instagramLink}
                  youtubeLink={item.youtubeLink}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="default" />
          <CarouselNext variant="default" />
        </Carousel>
      </Container>
    </section>
  );
}
