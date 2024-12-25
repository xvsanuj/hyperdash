import React from "react";

const Specifications = () => {
  const leftSpecs = [
    {
      title: "Range EPA est.",
      value: "Upto 358 miles"
    },
    {
      title: "Pack power", 
      value: "400+ hp"
    },
    {
      title: "Towing",
      value: "2000 Pounds"
    },
    {
      title: "Drag coefficient",
      value: "0.28 cd"
    }
  ];

  const rightSpecs = [
    {
      title: "Acceleration",
      value: "4.5s - 0-60 mph"
    },
    {
      title: "Wheels",
      value: "19\" or 20\""
    },
    {
      title: "Seating", 
      value: "Up to 5"
    },
    {
      title: "Top speed",
      value: "130 mph"
    }
  ];

  return (
    <div className="min-h-screen w-full flex bg-[#000]">
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
  );
};

export default Specifications;
