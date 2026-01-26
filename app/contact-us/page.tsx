import HeroSection from "@/components/pages/general/HeroSection";
import Contact from "@/components/pages/contact/Contact";

const breadcrumbs = [
  {
    id: "breadcrumb-contact-us",
    title: "Contact Us",
    link: null,
  },
];
export default function AboutUsPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        breadcrumbs={breadcrumbs}
        className="lg:mb-35"
      />

      <Contact />
    </>
  );
}
