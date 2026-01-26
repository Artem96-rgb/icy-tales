import HeroSection from "@/components/pages/general/HeroSection";
import Faq from "@/components/pages/faq/Faq";
import FaqPromoCode from "@/components/pages/faq/FaqPromoCode";
import SignUp from "@/components/pages/general/SignUp";

const breadcrumbs = [
  {
    id: "breadcrumb-faq",
    title: "Faq",
    link: null,
  },
];

export default function FAQPage() {
  return (
    <>
      <HeroSection
        title="Faq"
        breadcrumbs={breadcrumbs}
        className="lg:mb-35.5"
      />

      <Faq />

      <FaqPromoCode />

      <SignUp />
    </>
  );
}
