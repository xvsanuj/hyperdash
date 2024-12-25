import React from "react";

const DramaticFeatures = () => {
  const features = [
    {
      image: "./Design Img.png",
      title: "Impeccable Design"
    },
    {
      image: "./Performance Img.png", 
      title: "Elevated Performance"
    },
    {
      image: "./Interiors Img.png",
      title: "Great Interiors"
    }
  ];

  return (
    <div className="min-h-screen text-white bg-[#111] px-40">
      <div className="h-[50vh] w-full flex justify-between items-center">
        {features.map((feature, index) => (
          <div key={index}>
            <img
              className="h-full object-contain aspect-square"
              src={feature.image}
              alt=""
            />
            <h1 className="text-center py-4 text-xl">{feature.title}</h1>
          </div>
        ))}
      </div>
      <div className="h-[80vh] w-full flex justify-between pt-20">
        <div className="h-full w-full">
          <img
            className="h-[60vh] object-cover"
            src="./Sustainable img.png"
            alt=""
          />
        </div>
        <div className="h-full w-fit flex flex-col items-end">
          <img
            className="w-[150vh] object-contain"
            src="./Air X img.png"
            alt=""
          />
          <div>
          <h1 className="pt-8 text-3xl">Dive into a sustainable Future</h1>
          <p className="w-[50%] pt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            nemo distinctio nesciunt optio. Voluptate, distinctio vero.
          </p>
          </div>
        </div>
      </div>
      <div className="min-h-[90vh] w-full flex gap-20 bg-[#111]">
        <div className="h-full flex flex-col gap-20 items-center justify-center w-full">
            <div className="h-full w-full flex items-center gap-20">
                <img className="h-[35vh] w-[35vh] object-cover" src="./Air X Img-2.png" alt="" />
                <img className="h-[35vh] w-[35vh] object-cover" src="./Air X Img-2.png" alt="" />
            </div>
            <div className="h-full flex items-center gap-20 w-full">
                <img className="h-[35vh] w-[35vh] object-cover" src="./Air X Img-2.png" alt="" />
                <img className="h-[35vh] w-[35vh] object-cover" src="./Air X Img-2.png" alt="" />
            </div>
        </div>
        <div className="h-[80vh] w-full">
            <img className="h-full object-cover w-full" src="./Features 2.2 Image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DramaticFeatures;
