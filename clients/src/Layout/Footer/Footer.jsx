import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import {
  FaFacebookMessenger,
  FaGithub,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/*   */}
      <footer className="border-t-2    sm:hidden md:hidden xl:hidden">
        <div className="">
          <div className="text-center">
            <Link className="flex-center">
              <img
                src="./src/assets/logo.png"
                alt=""
              />
            </Link>
            <div className="p-5">
              <h2 className="text-4xl font-black text-gray-800 py-7">
                Join The NR Tribe
              </h2>
              <div className="flex justify-between border-b-2 text-lg py-3">
                <input
                  className="outline-none border-none w-[100%] font-normal"
                  type="text"
                  placeholder="Email Address"
                />
                <Link>
                  <GoArrowRight className="text-4xl text-gray-600 hover:text-gray-800 " />
                </Link>
              </div>
              <p className="text-gray-600 py-3 font-light ">
                By submitting your email, you acknowledge and agree to share
                your information with ANTA. Your information will be processed
                in accordance with our{" "}
                <Link className="text-blue-600 hover:text-blue-800 hover:underline ">
                  {" "}
                  privacy policy.
                </Link>
              </p>
            </div>
          </div>

          <div className="flex justify-center text-xl font-semibold border-b-2 py-5 gap-9">
            <Link className=" hover:text-gray-600 text-gray-800">
              Find a Store
            </Link>
            <Link className=" hover:text-gray-600 text-gray-800">Help</Link>
            <Link className=" hover:text-gray-600 text-gray-800">Join Us</Link>
            <Link className=" hover:text-gray-600 text-gray-800"> Sing In</Link>
          </div>
          <div className="">
            <div className="flex justify-center border-b-2  ">
              <div className=" w-[100%] flex justify-between px-[5px] my-[100px] ​ ">
                <div className="">
                  <h2 className="list-items">Nike</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Anta</h2>
                  <Link className="item-list">Basketball</Link>
                  <Link className="item-list">Running</Link>
                  <Link className="item-list">Tail</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Salomom</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">NewBalance</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Qiaodan</h2>
                  <Link className="item-list">New Brands</Link>
                  <Link className="item-list"> Corporate</Link>
                  <Link className="item-list">Signing</Link>
                  <Link className="item-list">More Brands</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 py-3 px-[100px] text-xl  ">
          <Link className="text-gray-600 hover:text-gray-800">
            <FaFacebook />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaFacebookMessenger />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaYoutube />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaTelegram />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaGithub />
          </Link>
        </div>
      </footer>
      {/* sm */}
      <footer className="border-t-2 hidden sm:block md:hidden xl:hidden">
        <div className="">
          <div className="text-center">
            <Link className="flex-center  ">
              <img className="" src="./src/assets/logo.png" alt="" />
            </Link>

            <div className="p-5">
              <h2 className="text-6xl font-black text-gray-800 py-7">
                Join The NR Tribe
              </h2>
              <div className="flex justify-between border-b-2 text-lg py-3">
                <input
                  className="outline-none border-none w-[100%] font-normal"
                  type="text"
                  placeholder="Email Address"
                />
                <Link>
                  <GoArrowRight className="text-4xl text-gray-600 hover:text-gray-800 " />
                </Link>
              </div>
              <p className="text-gray-600 py-3 font-light ">
                By submitting your email, you acknowledge and agree to share
                your information with ANTA. Your information will be processed
                in accordance with our{" "}
                <Link className="text-blue-600 hover:text-blue-800 hover:underline ">
                  {" "}
                  privacy policy.
                </Link>
              </p>
            </div>
          </div>

          <div className="flex justify-center text-xl font-semibold border-b-2 py-5 gap-9">
            <Link className=" hover:text-gray-600 text-gray-800">
              Find a Store
            </Link>
            <Link className=" hover:text-gray-600 text-gray-800">Help</Link>
            <Link className=" hover:text-gray-600 text-gray-800">Join Us</Link>
            <Link className=" hover:text-gray-600 text-gray-800"> Sing In</Link>
          </div>
          <div className="">
            <div className="flex justify-center border-b-2  ">
              <div className=" w-[100%] flex justify-between px-[10px] my-[100px] ​ ">
                <div className="">
                  <h2 className="list-items">Nike</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Anta</h2>
                  <Link className="item-list">Basketball</Link>
                  <Link className="item-list">Running</Link>
                  <Link className="item-list">Tail</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Salomom</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">NewBalance</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Qiaodan</h2>
                  <Link className="item-list">New Brands</Link>
                  <Link className="item-list"> Corporate</Link>
                  <Link className="item-list">Signing</Link>
                  <Link className="item-list">More Brands</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 py-3 px-[100px] text-xl  ">
          <Link className="text-gray-600 hover:text-gray-800">
            <FaFacebook />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaFacebookMessenger />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaYoutube />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaTelegram />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaGithub />
          </Link>
        </div>
      </footer>
      {/* md */}
      <footer className="border-t-2 hidden sm:hidden md:block xl:hidden">
        <div className="">
          <div className="flex justify-between items-center px-[10px]">
            <Link>
              <img src="./src/assets/logo.png" alt="" />
            </Link>
            <div className="w-[400px] p-5">
              <h2 className="text-4xl font-black text-gray-800 py-7">
                Join The NR Tribe
              </h2>
              <div className="flex justify-between border-b-2 text-lg py-3">
                <input
                  className="outline-none border-none w-[100%] font-normal"
                  type="text"
                  placeholder="Email Address"
                />
                <Link>
                  <GoArrowRight className="text-4xl text-gray-600 hover:text-gray-800 " />
                </Link>
              </div>
              <p className="text-gray-600 py-3 font-light ">
                By submitting your email, you acknowledge and agree to share
                your information with ANTA. Your information will be processed
                in accordance with our{" "}
                <Link className="text-blue-600 hover:text-blue-800 hover:underline ">
                  {" "}
                  privacy policy.
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center text-xl font-semibold border-b-2 py-5 gap-9">
            <Link className=" hover:text-gray-600 text-gray-800">
              Find a Store
            </Link>
            <Link className=" hover:text-gray-600 text-gray-800">Help</Link>
            <Link className=" hover:text-gray-600 text-gray-800">Join Us</Link>
            <Link className=" hover:text-gray-600 text-gray-800"> Sing In</Link>
          </div>
          <div className="">
            <div className="flex justify-center border-b-2  ">
              <div className=" w-[90%] flex justify-between px-[50px] my-[100px] ​ ">
                <div className="">
                  <h2 className="list-items">Nike</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Anta</h2>
                  <Link className="item-list">Basketball</Link>
                  <Link className="item-list">Running</Link>
                  <Link className="item-list">Tail</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Salomom</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">NewBalance</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Qiaodan</h2>
                  <Link className="item-list">New Brands</Link>
                  <Link className="item-list"> Corporate</Link>
                  <Link className="item-list">Signing</Link>
                  <Link className="item-list">More Brands</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 py-3 px-[100px] text-xl  ">
          <Link className="text-gray-600 hover:text-gray-800">
            <FaFacebook />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaFacebookMessenger />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaYoutube />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaTelegram />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaGithub />
          </Link>
        </div>
      </footer>
      {/* xl */}
      <footer className="border-t-2 hidden sm:hidden md:hidden xl:block">
        <div className="">
          <div className="flex justify-between items-center px-[100px]">
            <Link>
              <img src="./src/assets/logo.png" alt="" />
            </Link>
            <div className="w-[500px] p-5">
              <h2 className="text-5xl font-black text-gray-800 py-7">
                Join The NR Tribe
              </h2>
              <div className="flex justify-between border-b-2 text-lg py-3">
                <input
                  className="outline-none border-none w-[100%] font-normal"
                  type="text"
                  placeholder="Email Address"
                />
                <Link>
                  <GoArrowRight className="text-4xl text-gray-600 hover:text-gray-800 " />
                </Link>
              </div>
              <p className="text-gray-600 py-3 font-light ">
                By submitting your email, you acknowledge and agree to share
                your information with ANTA. Your information will be processed
                in accordance with our{" "}
                <Link className="text-blue-600 hover:text-blue-800 hover:underline ">
                  {" "}
                  privacy policy.
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center text-xl font-semibold border-b-2 py-5 gap-9">
            <Link className=" hover:text-gray-600 text-gray-800">
              Find a Store
            </Link>
            <Link className=" hover:text-gray-600 text-gray-800">Help</Link>
            <Link className=" hover:text-gray-600 text-gray-800">Join Us</Link>
            <Link className=" hover:text-gray-600 text-gray-800"> Sing In</Link>
          </div>
          <div className="">
            <div className="flex justify-center border-b-2  ">
              <div className=" w-[65%] flex justify-between px-[50px] my-[100px] ​ ">
                <div className="">
                  <h2 className="list-items">Nike</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Anta</h2>
                  <Link className="item-list">Basketball</Link>
                  <Link className="item-list">Running</Link>
                  <Link className="item-list">Tail</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Salomom</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">NewBalance</h2>
                  <Link className="item-list">News</Link>
                  <Link className="item-list">Man</Link>
                  <Link className="item-list">Women</Link>
                  <Link className="item-list">Kids</Link>
                </div>
                <div className="">
                  <h2 className="list-items">Qiaodan</h2>
                  <Link className="item-list">New Brands</Link>
                  <Link className="item-list"> Corporate</Link>
                  <Link className="item-list">Signing</Link>
                  <Link className="item-list">More Brands</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 py-3 px-[100px] text-xl  ">
          <Link className="text-gray-600 hover:text-gray-800">
            <FaFacebook />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaFacebookMessenger />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaYoutube />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaTelegram />
          </Link>
          <Link className="text-gray-600 hover:text-gray-800">
            <FaGithub />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
