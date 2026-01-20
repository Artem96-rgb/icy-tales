import { type LucideIcon } from "lucide-react";

interface IAboutUsStatisticsProps {
  list: {
    id: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
  }[];
}

export default function AboutUsStatistics({ list }: IAboutUsStatisticsProps) {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7.5">
      {list.map((item) => (
        <li className="relative rounded-2xl" key={item.id}>
          <span className="absolute w-full h-full bg-primary rounded-2xl top-0.5" />

          <div className="relative z-10 bg-background text-center shadow-[0px_12px_105px_12px_rgba(0,0,0,0.03)] pt-5.5 lg:pt-10.5 pb-8 lg:pb-13 rounded-2xl">
            <div className="relative mb-4 lg:mb-7 max-w-max mx-auto">
              <p className="text-3xl lg:text-[44px] leading-none font-berkshireSwash">
                {item.title}
              </p>
              <item.icon
                className="text-primary absolute top-2.5 -right-4"
                size={14}
                strokeWidth={3}
              />
            </div>

            <p className="text-base/none text-ring">{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
