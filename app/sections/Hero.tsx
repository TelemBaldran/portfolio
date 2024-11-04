import Image from "next/image";
import HeroImage from "@/assets/HeroPicPlaceholder.jpg";
import GrainImg from "@/assets/grain.jpg";
import StarIcon from "@/assets/StarPlaceholder.svg";
import SparkleIcon from "@/assets/SparklePlaceholder.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { HeroOrbit } from "../components/HeroOrbitSystem";

function Hero() {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${GrainImg.src})` }}
      ></div>
      <div className="absolute size-[620px] hero-ring"></div>
      <div className="absolute size-[820px] hero-ring"></div>
      <div className="absolute size-[1020px] hero-ring"></div>
      <div className="absolute size-[1220px] hero-ring"></div>
      {/* The Three Stars (no oppacity change) */}
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      {/* slightly opacity change "sparkles" */}
      <HeroOrbit size={590} rotation={0}>
        <SparkleIcon className="size-12 text-emerald-300" />
      </HeroOrbit>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={HeroImage}
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
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Software engineer know how good very
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
            hendrerit lectus, a sodales dolor.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
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
