import { SectionTopWrapper } from "@/components/SectionTopTwo";
import TypographyH2 from "@/components/typography/TypographyH2";
import TypographyP from "@/components/typography/TypographyP";
import Container from "@/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqData } from "@/data/faq";

export default function Faq() {
  return (
    <section>
      <Container>
        <SectionTopWrapper>
          <TypographyH2>
            Frequently Asked <span>Questions</span>
          </TypographyH2>
          <TypographyP>
            Some of the queries you want to know about us.
          </TypographyP>
        </SectionTopWrapper>

        <Accordion
          type="single"
          collapsible
          className="grid lg:grid-cols-2 gap-7.5 mb-12.5 md:mb-25 lg:mb-37.5"
        >
          {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
