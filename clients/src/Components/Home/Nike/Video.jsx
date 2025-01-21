import React from "react";

const Video = () => {
  return (
    <>
      <div className="flex-center py-5">
        {/* screen   */}
        <div className="  sm:hidden md:hidden lg:hidden xl:hidden">
          <div className="text-center">
            <h2 className="font-[500] text-2xl py-3 font-Archivo ">
              REMASTERED FOR STYLE
            </h2>
            <p className="font-light py-2 text-[10px]">
              Elevate your everyday look with th Pagasus-insupired Legacy
              runner.
            </p>
            <button className="bg-black btn-hover text-white py-1 px-4 rounded-3xl text-sm border-none outline-none">
              Shop
            </button>
          </div>
        </div>
        {/* screen sm */}
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden">
          <div className="text-center">
            <h2 className="font-[500] text-3xl py-3 font-Archivo ">
              REMASTERED FOR STYLE
            </h2>
            <p className="font-medium text-sm">
              Elevate your everyday look with th Pagasus-insupired Legacy
              runner.
            </p>
            <button className="bg-black btn-hover text-white py-2 px-6 rounded-3xl border-none outline-none">
              Shop
            </button>
          </div>
        </div>
        {/* screen md */}
        <div className="hidden sm:hidden md:block lg:hidden xl:hidden">
          <div className="text-center">
            <h2 className="font-[500] text-5xl py-3 font-Archivo ">
              REMASTERED FOR STYLE
            </h2>
            <p className="font-semibold">
              Elevate your everyday look with th Pagasus-insupired Legacy
              runner.
            </p>
            <button className="bg-black btn-hover text-white py-2 px-6 rounded-3xl border-none outline-none">
              Shop
            </button>
          </div>
        </div>
        {/* screen lg */}
        <div className="hidden sm:hidden md:hidden lg:block xl:hidden">
          <div className="text-center">
            <h2 className="font-[500] text-6xl py-3 font-Archivo ">
              REMASTERED FOR STYLE
            </h2>
            <p className="font-semibold">
              Elevate your everyday look with th Pagasus-insupired Legacy
              runner.
            </p>
            <button className="bg-black btn-hover text-white py-2 px-6 rounded-3xl border-none outline-none">
              Shop
            </button>
          </div>
        </div>
        {/* screen xl */}
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
          <div className="text-center">
            <h2 className="font-[500] text-7xl py-3 font-Archivo ">
              REMASTERED FOR STYLE
            </h2>
            <p className="font-semibold">
              Elevate your everyday look with th Pagasus-insupired Legacy
              runner.
            </p>
            <button className="bg-black btn-hover text-white py-2 px-6 rounded-3xl border-none outline-none">
              Shop
            </button>
          </div>
        </div>
      </div>
      <video
        className="object-cover"
        autoPlay
        loop
        muted
        src="/src/video/v.mp4"
        style={{ width: "100vw", height: "100vh" }}
      />
    </>
  );
};

export default Video;
