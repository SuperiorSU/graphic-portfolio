import { FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import BentoGridDemo from "@/components/example/bento-grid-demo";

import LayoutGridDemo from "@/components/example/layout-grid-demo";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import NavBar from "@/components/NavBar";

import { heroData, testimonials } from "@/lib/data";
import ASection from "@/components/ASection";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <NavBar />
      <div className="py-0" id="home"></div>
      <HeroParallax products={heroData} />
      <div className="py-16"></div>
      <ASection />
      <div className="py-16"></div>
      {/* <ParallaxScroll images={images} /> */}
      <div className="p-10 grid grid-cols-1 place-items-center content-center lg:grid-cols-3 gap-7">
        <div className="lg:col-span-1 rounded-lg h-full pt-12">
          {/* <img src="https://utfs.io/f/ebced0cb-0caf-4cca-91c8-956c0ae02484-z1r4tf.png" className="object-cover w-full h-full rounded-lg" alt="" /> */}
          <div className="lg:-rotate-90 lg:mt-80  ">
            <p className="text-slate-200 font-bold uppercase lg:text-xl text-base lg:text-start text-center">
              Design Portfolio
            </p>
            <h2 className="text-4xl lg:text-9xl  md:text-5xl font-bold text-white uppercase">
              Highlights
            </h2>
          </div>
        </div>
        <div className="lg:col-span-2" id="highlights">
          <BentoGridDemo />
        </div>
      </div>
      <div>{/* <FeaturesSectionDemo/> */}</div>
      <div className="py-20"></div>

      <div className="py-10" id="designs">
        <p className="text-slate-200 font-bold uppercase lg:text-xl text-base text-center">
          See my
        </p>
        <h2 className="text-4xl lg:text-9xl text-center md:text-5xl font-bold text-white uppercase">
          Designs
        </h2>
        <LayoutGridDemo />
        <div className="px-20 flex lg:justify-end items-center justify-center -mt-5">
          <a
            href="https://drive.google.com/drive/folders/1CscqWQg9gBTyBJxHd1lHj_XGN2q7n0P_?usp=sharing"
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-slate-950 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-slate-950"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-slate-950">
              Visit Here
            </span>
          </a>
        </div>
      </div>
      <div className="px-4 py-20" id="reviews">
        <p className="text-slate-200 font-bold uppercase lg:text-xl text-base text-center">
          Words of
        </p>
        <h2 className="text-4xl lg:text-9xl text-center md:text-5xl font-bold text-white uppercase">
          Appreciation
        </h2>
      </div>
      <InfiniteMovingCards items={testimonials} />
      <div className="py-24"></div>
      <div>
        <div className=" px-4 py-7 ">
          <div className="border-b-[1px] border-slate-500 lg:flex md:flex flex justify-between items-center">
            <div >
              <p className="text-slate-300 text-sm">
                Portfolio |{" "}
                <span className="text-white uppercase font-semibold">
                  Kumar Sujal
                </span>
              </p>
            </div>
            <div className=" py-4">
              <a className="inline-block" href="https://github.com/SuperiorSU">
                <button className="text-gray-400 hover:text-white duration-150 lg:block md:block border-t-[1px] border-white/30 px-2 py-2 bg-[#0b112a] rounded-full">
                  <FaGithub size={18} />
                </button>
              </a>
              <a className="inline-block mx-1" href="https://www.linkedin.com/in/kumar-sujal/">
                <button className="text-gray-400 hover:text-white duration-150 lg:block md:block border-t-[1px] border-white/30 px-2 py-2 bg-[#0b112a] rounded-full">
                  <FaLinkedinIn size={18} />
                </button>
              </a>
              <a className="inline-block" href="mailto:sujalsinha2001@gmail.com">
                <button className="text-gray-400 hover:text-white duration-150 lg:block md:block border-t-[1px] border-white/30 px-2 py-2 bg-[#0b112a] rounded-full">
                  <FaMailBulk size={18} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
