import React from "react";

const BannerAnta = () => {
  return (
    <div className="relative">
      <video
        className="object-cover"
        autoPlay
        loop
        muted
        src="/src/video/anta.mp4"
        style={{ width: "100vw", height: "70vh" }}
      />
      <div className="absolute bottom-28 w-[100vw]  text-white">
        <h2 className="text-center font-Archivo text-7xl ">Anta</h2>
        <div className="flex-center text-gray-500 ">
          <button className="bg-slate-50 btn-hover py-2 font-Archivo text-lg my-5 px-10 rounded-md "> Shop</button>
        </div>
      </div>
    </div>
  );
};

export default BannerAnta;
