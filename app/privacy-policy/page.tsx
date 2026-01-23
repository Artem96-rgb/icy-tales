import HeroSection from "@/components/pages/general/HeroSection";
import PrivacyPolicy from "@/components/pages/privacy-policy/PrivacyPolicy";
import { privacyPolicyData } from "@/data/privacy-policy";

const breadcrumbs = [
  {
    id: "breadcrumb-privacy-policy",
    title: "Privacy Policy",
    link: null,
  },
];
export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection
        title="Privacy Policy"
        className="md:mb-25"
        breadcrumbs={breadcrumbs}
      />

      <PrivacyPolicy
        title="Privacy Policy"
        description="Protecting your privacy is important to us. This Privacy Policy outlines how we collect, use, and disclose personal information when you use our website."
        data={privacyPolicyData}
      />
    </>
  );
}
