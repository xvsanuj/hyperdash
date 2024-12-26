import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const RevealAnimation = () => {
  const anime = useRef(null);
  const animePage1 = useRef(null);
  const animePage2 = useRef(null);
  const animePage3 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const leftSpecs = [
    {
      title: "Range EPA est.",
      value: "Upto 358 miles",
    },
    {
      title: "Pack power",
      value: "400+ hp",
    },
    {
      title: "Towing",
      value: "2000 Pounds",
    },
    {
      title: "Drag coefficient",
      value: "0.28 cd",
    },
  ];
  const rightSpecs = [
    {
      title: "Acceleration",
      value: "4.5s - 0-60 mph",
    },
    {
      title: "Wheels",
      value: '19" or 20"',
    },
    {
      title: "Seating",
      value: "Up to 5",
    },
    {
      title: "Top speed",
      value: "130 mph",
    },
  ];
  useGSAP(
    () => {
      gsap.fromTo(
        animePage3.current,
        {
          clipPath: "inset(0 0 0 0)",
        },
        {
          clipPath: "inset(0 100% 0 0)",
          stagger: -0.5,
          duration: 1.5,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: anime.current,
            start: "top -100%",
            end: "top -200%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        animePage1.current,
        {
          clipPath: "inset(0 0 0 0)",
        },
        {
          clipPath: "inset(0 100% 0 0)",
          stagger: -0.5,
          duration: 1.5,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: anime.current,
            start: "top -200%",
            end: "top -300%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.from(".first-title span", {
        y: 100,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: anime.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".first-text span", {
        y: 100,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: anime.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".first-subtext span", {
        y: 100,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: anime.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: anime }
  );
  return (
    <div ref={anime} className="h-[400vh] relative">
      <div className="h-screen w-full sticky top-0 left-0">
        <div
          ref={animePage2}
          className="h-screen absolute top-0 left-0 overflow-hidden w-full flex bg-[#000]"
        >
          <div className="h-screen w-full flex justify-center items-center">
            <img
              className="absolute -left-10 h-full object-contain w-full"
              src="./Model-X-Specs-Hero-Desktop-LHD 1.png"
              alt=""
            />
          </div>
          <div className="absolute h-screen w-[40%] right-0 pt-56">
            <h1 className="text-white text-4xl font-light mb-10">
              Model Air X Specifications
            </h1>
            <div className="flex gap-40">
              <div className="flex flex-col gap-10">
                {leftSpecs.map((spec, index) => (
                  <div key={index} className="flex flex-col gap-2 text-white">
                    <p>{spec.title}</p>
                    <p>{spec.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-10">
                {rightSpecs.map((spec, index) => (
                  <div key={index} className="flex flex-col gap-2 text-white">
                    <p>{spec.title}</p>
                    <p>{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          ref={animePage1}
          className="anime-base h-screen absolute top-0 left-0 w-full overflow-x-hidden"
        >
          <div className="h-full relative bg-white w-full flex justify-center items-center">
            <img
              className="h-[70%] absolute top-[30%] left-[5%] object-contain w-full"
              src="./Features 2.3 Img.png"
              alt=""
            />
            <div className="h-full absolute w-full px-40 pt-40">
              <h1 className="text-black text-7xl font-light">Air X</h1>
              <p className="text-black text-3xl mt-4">
                A new generation of performance
              </p>
              <div className="subtext pt-12">
                <p className="text-black text-lg mt-4 font-medium w-[30%]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor reiciendis quisquam doloribus praesentium cum nam.
                </p>
              </div>
              <div className="buttons flex gap-4 pt-12">
                <button className="btnWrapMain overflow-hidden text-white bg-orange-500 h-16 w-40 cursor-pointer">
                  <div className="relative h-full w-full flex items-center justify-center">
                    <div className="flex relative z-20 flex-col gap-2 h-5 overflow-hidden">
                      <span className="textWrap text-sm text-black font-medium mix-blend-exclusion">
                        Order Now
                      </span>
                      <span className="textWrap text-sm text-black  mix-blend-exclusion">
                        Order Now
                      </span>
                    </div>
                    <div className="btnWrap absolute top-[100%] left-0 h-full w-full bg-black"></div>
                  </div>
                </button>
                <button className="buttonAnime-2 text-white overflow-hidden backdrop-blur-sm h-16 w-40">
                  <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
                    <div className="text-div-2 h-5 flex relative z-20 flex-col items-center overflow-hidden">
                      <span className="text-sm text-black font-medium mix-blend-exclusion">
                        Learn More
                      </span>
                      <span className="text-sm text-black font-medium mix-blend-exclusion">
                        Learn More
                      </span>
                    </div>
                    <div className="btnWrapper-2 absolute top-0 left-0 h-full w-0 bg-orange-500"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={animePage3}
          className="anime-base h-screen absolute top-0 left-0 bg-[#111] w-full flex justify-center items-center overflow-x-hidden"
        >
          <div className="h-full w-full bg-[#222] px-40 pt-40 border-t-[1px] border-white border-opacity-40">
            <h1 className="text-white text-7xl font-light">
              <div className="first-title h-fit overflow-hidden flex gap-6">
                <span className="inline-block">Lexo</span>
                <span className="inline-block">Z</span>
              </div>
            </h1>
            <span className="first-text text-white text-3xl mt-4 h-fit overflow-hidden flex gap-2">
              <span className="inline-block">A</span>
              <span className="inline-block">new</span>
              <span className="inline-block">generation</span>
              <span className="inline-block">of</span>
              <span className="inline-block">performance</span>
            </span>
            <div className="subtext pt-12">
              <span className="first-subtext text-white text-lg mt-4 h-fit overflow-hidden font-medium w-[60%] inline-block">
                <span className="inline-block">
                  Lorem, ipsum dolor sit amet consectetur
                </span>
                <span className="inline-block">
                  adipisicing elit. Dolor reiciendis quisquam
                </span>
                <span className="inline-block">
                  doloribus praesentium cum nam.
                </span>
              </span>
            </div>
            <div className="buttons flex gap-4 pt-12">
              <button className="btnWrapMain overflow-hidden text-white bg-white h-16 w-40 cursor-pointer">
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="flex relative z-20 flex-col gap-2 h-5 overflow-hidden">
                    <span className="textWrap text-sm text-black font-medium mix-blend-exclusion">
                      Test Drive
                    </span>
                    <span className="textWrap text-sm text-black  mix-blend-exclusion">
                      Test Drive
                    </span>
                  </div>
                  <div className="btnWrap absolute top-[100%] left-0 h-full w-full bg-black"></div>
                </div>
              </button>
              <button className="buttonAnime-2 text-white overflow-hidden backdrop-blur-sm h-16 w-40">
                <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
                  <div className="text-div-2 h-5 flex relative z-20 flex-col items-center overflow-hidden">
                    <span className="text-sm text-white font-medium mix-blend-exclusion">
                      Learn More
                    </span>
                    <span className="text-sm text-white font-medium mix-blend-exclusion">
                      Learn More
                    </span>
                  </div>
                  <div className="btnWrapper-2 absolute top-0 left-0 h-full w-0 bg-white"></div>
                </div>
              </button>
            </div>
          </div>
          <div className="h-full w-full bg-[#222]">
            <img
              className="h-full object-cover w-full"
              src="./Features 2.2 Image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevealAnimation;
