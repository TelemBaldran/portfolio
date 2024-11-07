import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import StarIcon from "@/assets/StarPlaceholder.svg";
import ImgPlaceholder from "@/assets/LargePngPlaceholder.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/javascript.svg";
import HTMLIcon from "@/assets/html5.svg";
import CSSIcon from "@/assets/css3.svg";
import ReactIcon from "@/assets/react.svg";
import GithubIcon from "@/assets/github.svg";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: <JavascriptIcon />,
  },
  {
    title: "HTML5",
    icon: <HTMLIcon />,
  },
  {
    title: "CSS3",
    icon: <CSSIcon />,
  },
  {
    title: "React",
    icon: <ReactIcon />,
  },
  {
    title: "Github",
    icon: <GithubIcon />,
  },
];

function AboutSection() {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, and what inspires me"
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={ImgPlaceholder} alt="Placeholder img" />
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital expiriences.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AboutSection;
