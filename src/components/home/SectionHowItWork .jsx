import React from "react";

// Importing images directly
import HIW1img from "../../assets/HIW1.webp";
import HIW2img from "../../assets/HIW2.webp";
import HIW3img from "../../assets/HIW3.webp";
import VectorImg from "../../assets/VectorHIW.svg";

// Demo Data for How It Works section
const DEMO_DATA = [
  {
    id: 1,
    img: HIW1img,
    title: "Book & relax",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
  {
    id: 2,
    img: HIW2img,
    title: "Smart checklist",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
  {
    id: 3,
    img: HIW3img,
    title: "Save more",
    desc: "Let each trip be an inspirational journey, each room a peaceful space",
  },
];

const SectionHowItWork = ({ className = "", data = DEMO_DATA }) => {
  return (
    <div
      className={`nc-SectionHowItWork ${className} container mx-auto`}
      data-nc-id="SectionHowItWork"
    >
      <h2 className="text-3xl font-bold text-center mb-6">How it works</h2>
      <p className="text-center text-neutral-500">Keep calm & travel on</p>

      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        <img
          className="hidden md:block absolute inset-x-0 top-10"
          src={VectorImg}
          alt="Vector Background"
        />
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            {/* Displaying image */}
            <img
              className="mb-8 max-w-[200px] mx-auto"
              src={item.img}
              alt={item.title}
            />
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
