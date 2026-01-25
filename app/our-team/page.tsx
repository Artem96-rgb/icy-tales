import HeroSection from "@/components/pages/general/HeroSection";
import OurTeamMembers from "@/components/pages/our-team/OurTeamMembers";

export default function OurTeamPage() {
  const breadcrumbs = [
    {
      id: "breadcrumb-our-team",
      title: "Our Team",
      link: null,
    },
  ];

  return (
    <>
      <HeroSection title="Our Team" breadcrumbs={breadcrumbs} />

      <OurTeamMembers />
    </>
  );
}
