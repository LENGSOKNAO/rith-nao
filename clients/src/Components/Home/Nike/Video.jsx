import React from "react";

const Video = () => {
  return (
    <>
      <div className="flex-center py-10">
        <div className="text-center">
          <h2 className="font-[500] text-7xl py-3 font-Archivo ">REMASTERED FOR STYLE</h2>
          <p className="font-semibold">
            Elevate your everyday look with th Pagasus-insupired Legacy runner.
          </p>
          <button className="bg-black btn-hover text-white py-2 px-6 rounded-3xl border-none outline-none">
            Shop
          </button>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        src="/src/video/v.mp4"
        style={{ width: "100%", height: "auto" }}
      />
    </>
  );
};

export default Video;
