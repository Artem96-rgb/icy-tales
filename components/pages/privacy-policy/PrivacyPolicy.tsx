import TypographyP from "@/components/typography/TypographyP";
import Container from "@/components/Container";

interface IPrivacyPolicyProps {
  title: string;
  description: string;
  data: {
    id: string;
    title: string;
    description: string;
  }[];
}
export default function PrivacyPolicy({
  title,
  description,
  data,
}: IPrivacyPolicyProps) {
  return (
    <section className="mb-12.5 md:mb-25">
      <Container size="small">
        <div className="space-y-2 mb-4">
          <p className="text-2xl lg:text-3xl leading-none font-semibold">
            {title}
          </p>
          <TypographyP size="base">{description}</TypographyP>
        </div>

        <ul className="space-y-5">
          {data.map((item, index) => (
            <li key={item.id}>
              <p className="text-xl lg:text-22 leading-none font-bold mb-3">
                {index + 1}. {item.title}
              </p>
              <TypographyP size="base">{item.description}</TypographyP>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
