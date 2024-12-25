import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RiArrowRightLine, RiArrowLeftLine } from "@remixicon/react";

const Stories = () => {
  const stories = useMemo(() => [
    {
      image: "./src/assets/Air X img.png",
      alt: "Car Taillight",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "./src/assets/Air X img.png", 
      alt: "Car Side View",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "./src/assets/Air X img.png",
      alt: "Car Charging Port", 
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "./src/assets/Air X img.png",
      alt: "Car Charging Port",
      title: "Lorem Ipsum", 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "./src/assets/Air X img.png",
      alt: "Car Charging Port",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "./src/assets/Air X img.png",
      alt: "Car Charging Port",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ], []);

  const swiperConfig = useMemo(() => ({
    modules: [Navigation],
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },
    loop: true,
    speed: 800,
    effect: "slide",
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  }), []);

  const renderStoryCard = (story, index) => (
    <SwiperSlide key={index}>
      <div className="group">
        <img
          src={story.image}
          alt={story.alt}
          className="w-full aspect-[4/3] object-cover rounded-lg"
          loading="lazy"
        />
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-white">
            {story.title}
          </h3>
          <p className="text-gray-400 mt-2">{story.description}</p>
        </div>
      </div>
    </SwiperSlide>
  );

  return (
    <div className="h-screen w-full bg-[#1C1C1C] px-40 pt-32">
      <div className="flex justify-between items-center mb-20">
        <h2 className="text-5xl text-white">Our Stories</h2>
        <div className="flex gap-4">
          <button 
            type="button" 
            aria-label="Previous slide"
            className="swiper-prev bg-white h-14 cursor-pointer w-14 flex items-center justify-center text-black p-2"
          >
            <RiArrowLeftLine className="cursor-pointer" />
          </button>
          <button 
            type="button"
            aria-label="Next slide" 
            className="swiper-next bg-white h-14 cursor-pointer w-14 flex items-center justify-center text-black p-2"
          >
            <RiArrowRightLine className="cursor-pointer"/>
          </button>
        </div>
      </div>
      <Swiper {...swiperConfig} className="relative select-none cursor-pointer">
        {stories.map(renderStoryCard)}
      </Swiper>
    </div>
  );
};

export default Stories;
