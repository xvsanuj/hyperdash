import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full bg-[#000]">
        <img
          className="h-full w-full object-cover object-center"
          src="./hero-image.png"
          alt=""
        />
        <div className="absolute top-0 w-full h-full">
          <button className="buttonAnime absolute bottom-[15%] text-white overflow-hidden left-1/2 backdrop-blur-sm -translate-x-1/2 border-[1px] border-white h-32 w-32 rounded-full">
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="text-div h-5 flex relative z-20 flex-col items-center overflow-hidden">
                <span className="text-sm text-white font-medium mix-blend-exclusion">
                  Test Drive
                </span>
                <span className="text-sm text-white font-medium mix-blend-exclusion">
                  Test Drive
                </span>
              </div>
              <div className="btnWrapper absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-0 w-0 rounded-full bg-white"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
