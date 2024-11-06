import Project1Img from "@/assets/Project1Placeholder.jpg";
import Project2Img from "@/assets/Project2Placeholder.jpg";
import Project3Img from "@/assets/Project3Placeholder.jpg";
import GrainImg from "@/assets/grain.jpg";
import Image from "next/image";
import CircleCheckMark from "@/assets/checkMark.svg";
import ArrowUp from "@/assets/ArrowUp.svg";

const portfolioProjects = [
  {
    company: "myself",
    year: "2024",
    title: "Project 1 Placeholder title",
    results: [
      { title: "achived1" },
      { title: "achived2" },
      { title: "achived3" },
    ],
    link: "http://localhost:3000/",
    image: Project1Img,
  },
  {
    company: "myself",
    year: "2024",
    title: "Project 2 Placeholder title",
    results: [
      { title: "achived4" },
      { title: "achived5" },
      { title: "achived6" },
    ],
    link: "google.com",
    image: Project2Img,
  },
  {
    company: "myself",
    year: "2024",
    title: "Project 3 Placeholder title",
    results: [
      { title: "achived7" },
      { title: "achived8" },
      { title: "achived9" },
    ],
    link: "",
    image: Project3Img,
  },
];

function Projects() {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ background: `url(${GrainImg.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CircleCheckMark className="size-5 md:size-6 text-white/50" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span> Visit Live Site </span>
                      <ArrowUp className="size-4 rotate-45 " />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
