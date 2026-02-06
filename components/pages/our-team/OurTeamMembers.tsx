import Container from "@/components/Container";
import { SectionTopWrapper } from "@/components/SectionTopTwo";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import { ourTeamData } from "@/data/our-team";
import OurTeamItem from "@/components/OurTeamItem";

export default function OurTeamMembers() {
  return (
    <section className="block-margin-custom">
      <Container>
        <SectionTopWrapper>
          <TypographyH2>
            Our <span>Team</span> Members
          </TypographyH2>
          <TypographyP>
            Get to know the friendly faces behind your favorite flavors.
          </TypographyP>
        </SectionTopWrapper>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-7.5 gap-y-10 md:gap-y-18.75">
          {ourTeamData?.map((item) => (
            <li key={item.id}>
              <OurTeamItem
                avatar={item.avatar}
                title={item.title}
                subtitle={item.subtitle}
                facebookLink={item.facebookLink}
                instagramLink={item.instagramLink}
                youtubeLink={item.youtubeLink}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
