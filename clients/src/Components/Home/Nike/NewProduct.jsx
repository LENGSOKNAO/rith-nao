import React from "react";

const NewProduct = () => {
  const BannerSilde = [
    {
      id: "1",
      name: "Women's Leggings",
      tittle: "Strtch Freely",
      link: "./src/assets/nike/nike-just-do-it (6).jpg",
    },
    {
      id: "2",
      name: "Ari Force 1'07",
      tittle: "Keep it Fresh",
      link: "./src/assets/nike/nike-just-do-it (7).jpg",
    },
  ];
  return (
    <>
      {/* screen   */}
      <div className="  sm:hidden md:hidden xl:hidden ">
        <div className="py-40">
          <h2 className=" text-center text-5xl font-[900] py-[50px] font-Archivo">
            New
          </h2>
          <div
            className="grid grid-cols-1"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            duration="500"
          >
            {BannerSilde.map((e, i) => (
              <div className="relative" key={i}>
                <img className="object-cover" src={e.link} alt="" />
                <div className="absolute text-white bottom-[40px] left-10">
                  <p className="font-semibold">{e.tittle}</p>
                  <h2 className="font-[500] text-2xl py-3 ">{e.name}</h2>
                  <button className="text-gray-900 bg-white py-1 px-4 rounded-3xl border-none outline-none">
                    Shop
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* screen sm */}
      <div className="hidden sm:block md:hidden xl:hidden ">
        <div className="py-40">
          <h2 className=" text-center text-5xl font-[900] py-[50px] font-Archivo">
            New
          </h2>
          <div
            className="grid grid-cols-1"
            // data-aos="fade-up"
            // data-aos-anchor-placement="center-center"
            // duration="500"
          >
            {BannerSilde.map((e, i) => (
              <div className="relative" key={i}>
                <img className="object-cover" src={e.link} alt="" />
                <div className="absolute text-white bottom-[70px] left-10">
                  <p className="font-semibold">{e.tittle}</p>
                  <h2 className="font-[500] text-4xl py-3 ">{e.name}</h2>
                  <button className="text-gray-900 bg-white py-2 px-6 rounded-3xl border-none outline-none">
                    Shop
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* screen md */}
      <div className="hidden sm:hidden md:block xl:hidden ">
        <div className="py-40">
          <h2 className=" text-center text-7xl font-[900] py-[50px] font-Archivo">
            New
          </h2>
          <div
            className="grid grid-cols-1"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            duration="1000"
          >
            {BannerSilde.map((e, i) => (
              <div className="relative" key={i}>
                <img className="object-cover" src={e.link} alt="" />
                <div className="absolute text-white bottom-[100px] left-10">
                  <p className="font-semibold">{e.tittle}</p>
                  <h2 className="font-[500] text-4xl py-3 ">{e.name}</h2>
                  <button className="text-gray-900 bg-white py-2 px-6 rounded-3xl border-none outline-none">
                    Shop
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* screen xl */}
      <div className="hidden sm:hidden md:hidden xl:block ">
        <div className="py-40">
          <h2 className=" text-center text-7xl font-[900] py-[50px] font-Archivo">
            New
          </h2>
          <div
            className="grid grid-cols-2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            duration="1000"
          >
            {BannerSilde.map((e, i) => (
              <div className="relative" key={i}>
                <img src={e.link} alt="" />
                <div className="absolute text-white bottom-[100px] left-10">
                  <p className="font-semibold">{e.tittle}</p>
                  <h2 className="font-[500] text-4xl py-3 ">{e.name}</h2>
                  <button className="text-gray-900 bg-white py-2 px-6 rounded-3xl border-none outline-none">
                    Shop
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
