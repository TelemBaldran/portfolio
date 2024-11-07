import AvatarPlaceholder from "@/assets/placeholderAvatar.png";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

// Placeholder data, pulled from chat GPT.
const references = [
  {
    name: "Alice Johnson",
    position: "Marketing Director, Creative Co.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dolor dignissim, tincidunt felis vel, euismod risus. Mauris molestie porta est ut vestibulum. Vestibulum odio orci, dignissim sed luctus nec, pharetra sit amet augue. Sed non diam ac magna porttitor posuere sed in justo. Nam feugiat volutpat nisi, sed elementum erat malesuada et.",
    avatar: AvatarPlaceholder,
  },
  {
    name: "Michael Lee",
    position: "Founder, Tech Innovators",
    text: "Highly professional and incredibly talented. They turned our ideas into reality and gave us a website that truly represents our brand.",
    avatar: AvatarPlaceholder,
  },
  {
    name: "Sandra Nguyen",
    position: "Project Manager, Eco Solutions",
    text: "Amazing attention to detail and a keen sense for aesthetics. The designer was responsive to feedback and delivered exactly what we needed.",
    avatar: AvatarPlaceholder,
  },
  {
    name: "James Thompson",
    position: "CEO, Thompson Financials",
    text: "Excellent work! The designer was very knowledgeable and made sure our website is both functional and visually appealing. Highly recommended!",
    avatar: AvatarPlaceholder,
  },
  {
    name: "Emma Patel",
    position: "Owner, Artisanal Goods",
    text: "We saw a big increase in customer engagement after our site redesign. The designer was easy to work with and understood our needs perfectly.",
    avatar: AvatarPlaceholder,
  },
];

function ReferencesSection() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what people that worked with me
        have to say."
        />
        <div className="flex mt-16 lg:mt-24 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-8">
            {references.map((reference) => (
              <Card
                key={reference.name}
                className="max-w-xs md:max-w-md md:p-8"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                    <Image
                      src={reference.avatar}
                      alt={reference.name}
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="semibold">{reference.name}</div>
                    <div className="text-sm text-white/30">
                      {reference.position}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm md:mt-6 md:text-base">
                  {reference.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferencesSection;
