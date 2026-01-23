import HeroSection from "@/components/pages/general/HeroSection";
import PrivacyPolicy from "@/components/pages/privacy-policy/PrivacyPolicy";
import { termsConditionData } from "@/data/terms-conditions";

const breadcrumbs = [
  {
    id: "breadcrumb-terms-conditions",
    title: "Terms & Conditions",
    link: null,
  },
];
export default function TermsConditionsPage() {
  return (
    <>
      <HeroSection
        title="Terms & Conditions"
        className="md:mb-25"
        breadcrumbs={breadcrumbs}
      />

      <PrivacyPolicy
        title="Terms and Conditions:"
        description="Welcome to [Your Online Education Platform]! Before accessing or using our website, please read these Terms and Conditions carefully. By accessing or using any part of the site, you agree to be bound by these Terms and Conditions."
        data={termsConditionData}
      />
    </>
  );
}
