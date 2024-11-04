import Project1Img from "@/assets/Project1Placeholder.jpg";
import Project2Img from "@/assets/Project2Placeholder.jpg";
import Project3Img from "@/assets/Project3Placeholder.jpg";
import Image from "next/image";
import CircleCheckMark from "@/assets/checkMark.svg";

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
    link: "",
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
    link: "",
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
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:outline-rounded-3xl after:outline-white/20 p-8"
            >
              <div className="flex">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul>
                {project.results.map((result) => (
                  <li key={result.title}>
                    <CircleCheckMark className="size-4 text-emerald-300" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button>Veiw Live Site</button>
              </a>
              <Image src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
