import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const DramaticFeatures = () => {
  const dramaticRef = useRef(null);
  const features = [
    {
      image: "./Design Img.png",
      title: "Impeccable Design",
    },
    {
      image: "./Performance Img.png",
      title: "Elevated Performance",
    },
    {
      image: "./Interiors Img.png",
      title: "Great Interiors",
    },
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(
        ".imageOverlay",
        {
          width: 0,
          duration: 1,
          stagger: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".imageOverlay",
            start: "top 80%",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        },
        "d"
      );
      gsap.to(".imageAnime", {
        width: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".imageAnime",
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(".imageAnime-3", {
        width: 0,
        duration: 1.4,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".imageAnime-3",
          start: "top 400vh",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(".imageAnime-4", {
        height: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".imageAnime-4",
          start: "top 400vh",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(
        ".spanAnime",
        {
          y: 100,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".spanAnime",
            start: "-200vh 100%",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        },
        "d"
      );
      gsap.from(
        ".spanAnime-2",
        {
          y: 100,
          duration: 1.5,
          stagger: 0.2,
          ease: "circ",
          scrollTrigger: {
            trigger: ".spanAnime-2",
            start: "-200vh 80%",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        },
        "d"
      );
    },
    { scope: dramaticRef }
  );

  return (
    <div ref={dramaticRef} className="min-h-screen text-white bg-[#111] px-40">
      <div className="h-[50vh] w-full flex justify-between items-center">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="relative">
              <div className="h-full w-full overflow-hidden hover:scale-95 transition-all duration-700 cursor-pointer">
                <img
                  className="h-full object-contain aspect-square hover:scale-[1.2] transition-all duration-700"
                  src={feature.image}
                  alt=""
                />
              </div>
              <div className="imageOverlay absolute top-0 right-0 h-full w-full bg-[#111]"></div>
            </div>
            <h1 className="text-center py-4 text-xl">
              <div className="h-fit overflow-hidden">
                <span className="spanAnime text-white inline-block">
                  {feature.title}
                </span>
              </div>
            </h1>
          </div>
        ))}
      </div>
      <div className="h-[80vh] w-full flex justify-between pt-20">
        <div className="h-full w-full">
          <div className="relative">
            <div className="h-[60vh] w-fit overflow-hidden hover:scale-95 transition-all duration-700 cursor-pointer">
              <img
                className="h-full object-cover hover:scale-[1.15] transition-all duration-700"
                src="./Sustainable img.png"
                alt=""
              />
            </div>
            <div className="imageAnime absolute top-0 right-0 h-full w-full bg-[#111]"></div>
          </div>
        </div>
        <div className="h-full w-fit flex flex-col items-end">
          <div className="relative">
            <div className="h-fit w-fit overflow-hidden hover:scale-95 transition-all duration-700 cursor-pointer">
              <img
                className="w-[150vh] object-contain hover:scale-[1.15] transition-all duration-700"
                src="./Air X img.png"
                alt=""
              />
            </div>
            <div className="imageAnime absolute top-0 right-0 h-full w-full bg-[#111]"></div>
          </div>
          <div className="self-start">
            <h1 className="pt-8 text-3xl">
              <div className="h-fit overflow-hidden">
                <span className="spanAnime-2 text-white inline-block">
                  Dive into a sustainable Future
                </span>
              </div>
            </h1>
            <div className="w-full pt-4 text-sm">
              <div className="h-fit overflow-hidden">
                <span className="spanAnime-2 text-white inline-block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
              </div>
              <div className="h-fit overflow-hidden">
                <span className="spanAnime-2 text-white inline-block">
                  Molestias nemo distinctio nesciunt optio. Voluptate,
                  distinctio
                </span>
              </div>
              <div className="h-fit overflow-hidden">
                <span className="spanAnime-2 text-white inline-block">
                  vero.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[90vh] w-full flex gap-20 bg-[#111]">
        <div className="h-full flex flex-col gap-20 items-center justify-center w-full">
          <div className="h-full w-full flex items-center gap-20">
            <div className="relative">
              <div className="h-[35vh] w-[35vh] overflow-hidden hover:scale-95 transition-all duration-700 cursor-pointer">
                <img
                  className="h-full object-cover hover:scale-[1.15] transition-all duration-700"
                  src="./img1.png"
                  alt=""
                />
              </div>
              <div className="imageAnime-3 absolute top-0 right-0 h-full w-full bg-[#111]"></div>
            </div>
            <div className="relative">
              <div className="h-[35vh] w-[35vh] overflow-hidden hover:scale-95 transition-all duration-700 cursor-pointer">
                <img
                  className="h-full object-cover hover:scale-[1.15] transition-all duration-700"
                  src="./img2.png"
                  alt=""
                />
              </div>
              <div className="imageAnime-3 absolute top-0 right-0 h-full w-full bg-[#111]"></div>
            </div>
          </div>
          <div className="h-full flex items-center gap-20 w-full">
            <div className="relative">
              <div className="h-[35vh] w-[35vh] overflow-hidden hover:scale-95 transition-all duration-700 cursor-pointer">
                <img
                  className="h-full object-cover hover:scale-[1.15] transition-all duration-700"
                  src="./img3.png"
                  alt=""
                />
              </div>
              <div className="imageAnime-3 absolute top-0 right-0 h-full w-full bg-[#111]"></div>
            </div>
            <div className="relative">
              <div className="h-[35vh] w-[35vh] overflow-hidden hover:scale-95 transition-all duration-700 cursor-pointer">
                <img
                  className="h-full object-cover hover:scale-[1.15] transition-all duration-700"
                  src="./img4.png"
                  alt=""
                />
              </div>
              <div className="imageAnime-3 absolute top-0 right-0 h-full w-full bg-[#111]"></div>
            </div>
          </div>
        </div>
        <div className="h-[80vh] w-full">
          <div className="relative">
            <div className="h-[80vh] w-fit overflow-hidden hover:scale-95 transition-all duration-700 cursor-pointer">
              <img
                className="h-full object-cover hover:scale-[1.15] transition-all duration-700"
                src="./imgRightLarge.png"
                alt=""
              />
            </div>
            <div className="imageAnime-4 absolute bottom-0 right-0 h-full w-full bg-[#111]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DramaticFeatures;
