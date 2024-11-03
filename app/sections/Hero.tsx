import Image from "next/image";
import placeholder from "@/assets/Placeholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={placeholder}
            className="size-[100px]"
            alt="placeholder image: Nelly questioning why this is still here"
          />
          <div className="inline-flex bg-gray-950 border border-gray-800 px-4 py-1.5 items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Availbale for new projects
            </div>
          </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">
          Software engineer
        </h1>
        <p className="mt-4 text-center text-white/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
          hendrerit lectus, a sodales dolor.
        </p>
        <div className="flex flex-col items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span>Explore my work</span>
            <FontAwesomeIcon icon={faArrowDown} className="h-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👍</span>
            <span className="font-semibold">Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
