import Container from "@/components/Container";
import { SectionTopWrapper } from "@/components/SectionTopTwo";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import ContactInfo from "@/components/pages/contact/ContactInfo";
import ContactForm from "@/components/pages/contact/ContactForm";

export default function Contact() {
  return (
    <section className="mb-12.5 md:mb-20 lg:mb-37.5">
      <Container>
        <SectionTopWrapper className="lg:mb-20">
          <TypographyH2>
            Get in <span>Touch</span> With Us
          </TypographyH2>
          <TypographyP>
            Some of the queries you want to know about us.
          </TypographyP>
        </SectionTopWrapper>

        <div className="flex lg:items-start gap-18.5 max-lg:flex-col">
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
