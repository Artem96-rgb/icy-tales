// import NoProductsMessage from "@/components/blocks/NoProductsMessage";

import Container from "@/components/Container";
import TypographyH1 from "@/components/typography/TypographyH1";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="gradient-two py-10">
      <Container className="text-center">
        <TypographyH1 size="xl" className="mb-10">
          404
        </TypographyH1>
        <p className="text-4xl font-medium mb-5">
          Sorry! The Page Not Found ;(
        </p>
        <p className="text-xl text-ring max-w-162.5 mx-auto mb-8.5">
          Lorem ipsum dolor sit amet, consec tse tur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <Button className="px-7.5 gap-5">
          <ArrowLeft size={16} />
          Back to Home
        </Button>
      </Container>
    </div>
  );
}
