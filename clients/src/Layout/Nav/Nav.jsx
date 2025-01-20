import { HiBars4 } from "react-icons/hi2";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { DataPopular } from "../../data/DataPopular";
import { BsChevronRight } from "react-icons/bs";

const Nav = () => {
  const [bar, setBar] = useState(false);
  const [nike, setNike] = useState(false);
  const [anta, setAnta] = useState(false);
  const [salomon, setSalomon] = useState(false);
  const [newbalance, setNewbalance] = useState(false);
  const [qiaodan, setQiaodan] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = () => {
    if (searchInput.trim() === "") {
      return;
    }

    // Update recent searches, limit to 5
    setRecentSearches((prevSearches) => {
      const updatedSearches = [...prevSearches, searchInput];
      return updatedSearches.slice(-5); // Keep only the last 5
    });

    // Clear the input field
    setSearchInput("");
  };

  return (
    <nav>
      {/*  */}
      <div className="sm:hidden md:hidden  xl:hidden">
        <div className="flex-between p-5 ">
          <Link to="/">
            <img className="w-[100px]" src="./src/assets/logo.png" alt="" />
          </Link>
          <div className="flex-center text-2xl gap-2">
            <Link>
              <CiSearch onClick={() => setSearch(true)} />
              {search && (
                <div className="absolute top-0 left-0 bg-white w-[100%] border-b-2">
                  <div className="flex items-center justify-between px-5 ">
                    <div className="py-5 ">
                      <div className="flex w-[80vw] items-center bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl">
                        <button onClick={handleSearch} className="">
                          <CiSearch className="bg-[#ebe8e8] rounded-3xl p-[5px] text-4xl" />
                        </button>
                        <input
                          className="w-[100%] outline-none boredr-none text-base bg-transparent font-semibold"
                          type="text"
                          placeholder="Search"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      className=" cursor-pointer py-6 px-2 font-semibold text-base text-gray-600 hover:text-gray-800"
                      onClick={() => setSearch(false)}
                    >
                      Cancel
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-[80%]">
                      <h3 className="font-medium text-sm text-gray-400">
                        Popular Search
                      </h3>
                      <div className="  items-center gap-2">
                        <div className="flex gap-2 my-[50px]">
                          {DataPopular.slice(0, 2).map((e, i) => (
                            <Link
                              key={i}
                              className="px-6 py-1 bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl"
                            >
                              {e.name}
                            </Link>
                          ))}
                        </div>
                        <div className="flex gap-2 my-[20px] flex-wrap">
                          {recentSearches.length === 0 ? (
                            <span className="text-gray-500 text">
                              No recent searches...
                            </span>
                          ) : (
                            recentSearches.map((query, index) => (
                              <span
                                key={index}
                                className="px-6 py-1 bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl"
                              >
                                {query}
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Link>
            <Link>
              <CiHeart />
            </Link>
            <Link>
              <CiShoppingCart />
            </Link>
            <Link
              onClick={() => {
                setBar((e) => !e);
              }}
            >
              <HiBars4 />
            </Link>
          </div>
        </div>
        {/* list items navbar */}
        {bar && (
          <div className="">
            <div className=" w-[100%] overflow-hidden   100 opacity-50 bg-black absolute top-0  h-[100vh]"></div>
            <div className="absolute top-0 h-[100vh] bg-[#fff]  right-0">
              <div
                onClick={() => {
                  setBar((e) => !e);
                }}
                className="w-11 h-11 cursor-pointer absolute right-0 rounded-3xl text-3xl my-5  text-center text-hover "
              >
                x
              </div>
              <div className=" py-[100px] w-[300px] px-10">
                <div className="item">
                  <Link to="/nike" onClick={() => setNike((n) => !n)}>
                    Nike
                  </Link>
                  <BsChevronRight />
                </div>
                {nike && (
                  <div className="w-[100%] absolute top-0 left-0 h-[100%]  border-b-2 bg-white">
                    <div className="w-[90%] px-[50px] my-[100px]">
                      <div
                        className=" text-sm cursor-pointer font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setNike((n) => !n)}
                      >
                        Cancel
                      </div>
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Trending</Link>
                        <Link className="item-list">Shop Classics</Link>
                        <Link className="item-list">Explore</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose By Age </Link>
                        <Link className="item-list">Clothing By Age </Link>
                        <Link className="item-list">All Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                    </div>
                  </div>
                )}
                <div className="item">
                  <Link onClick={() => setSalomon((s) => !s)}>Salomon</Link>
                  <BsChevronRight />
                </div>
                {salomon && (
                  <div className="w-[100%] absolute top-0 left-0 h-[100%]  border-b-2 bg-white">
                    <div className=" w-[90%]  px-[50px] my-[100px] ​ ">
                      <div
                        className="text-sm cursor-pointer font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setSalomon((s) => !s)}
                      >
                        Cancel
                      </div>
                      <div className="">
                        <h2 className="list-items">Shoes</h2>
                        <Link className="item-list">Man</Link>
                        <Link className="item-list">Women</Link>
                        <Link className="item-list">Sportstyle</Link>
                        <Link className="item-list">Icon</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Bags & Packs</Link>
                        <Link className="item-list"> Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Bags & Packs</Link>
                        <Link className="item-list"> Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Kids</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list"> Skiing</Link>
                        <Link className="item-list">Showboarding</Link>
                      </div>
                    </div>
                  </div>
                )}
                <div className="item">
                  <Link onClick={() => setNewbalance((b) => !b)}>
                    NewBalance
                  </Link>
                  <BsChevronRight />
                </div>
                {newbalance && (
                  <div className="w-[100%] absolute top-0 left-0 h-[100%]  border-b-2 bg-white">
                    <div className=" w-[90%]   px-[50px] my-[100px]">
                      <div
                        className=" text-sm cursor-pointer font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setNewbalance((b) => !b)}
                      >
                        Cancel
                      </div>
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">Men's new arrivals </Link>
                        <Link className="item-list">Women's new arrivals</Link>
                        <Link className="item-list">Kids' new arrivals</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">New arrivals</Link>
                        <Link className="item-list">Top Style</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Age</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">New arrivals</Link>
                        <Link className="item-list">Top Style</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Age</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Kids</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Bags</Link>
                        <Link className="item-list"> All Accessories</Link>
                      </div>
                    </div>
                  </div>
                )}
                <div className="item">
                  <Link onClick={() => setAnta((a) => !a)}>Anta</Link>
                  <BsChevronRight />
                </div>
                {anta && (
                  <div className="w-[100%] absolute top-0 left-0 h-[100%]  border-b-2 bg-white">
                    <div className=" w-[90%] px-[50px] my-[100px]">
                      <div
                        className=" text-sm cursor-pointer   font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setAnta((a) => !a)}
                      >
                        Cancel
                      </div>
                      <div className="">
                        <h2 className="list-items">Basketball</h2>
                        <Link className="item-list">Kal 1</Link>
                        <Link className="item-list">Kal 1 Speed</Link>
                        <Link className="item-list">Kal 1 team</Link>
                        <Link className="item-list">KT</Link>
                        <Link className="item-list">GH</Link>
                        <Link className="item-list">Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Running</h2>
                        <Link className="item-list">C202 5 GT</Link>
                        <Link className="item-list">C202 6 Pro</Link>
                        <Link className="item-list">C202 6 </Link>
                        <Link className="item-list"> Bellero</Link>
                        <Link className="item-list">Shop Women</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Tail</h2>
                        <Link className="item-list">ANTA Swift</Link>
                        <Link className="item-list">ANTA Saker</Link>
                        <Link className="item-list">ANTA Wind Wander</Link>
                        <Link className="item-list">
                          {" "}
                          ANTA ULT Dune Runner{" "}
                        </Link>
                        <Link className="item-list">Shop Women</Link>
                        <Link className="item-list">Gits ​</Link>
                      </div>
                    </div>
                  </div>
                )}
                <div className="item">
                  <Link onClick={() => setQiaodan((q) => !q)}>Qiaodan</Link>
                  <BsChevronRight />
                </div>
                {qiaodan && (
                  <div className=" w-[100%] absolute top-0 left-0 h-[100%]  border-b-2 bg-white">
                    <div className=" w-[90%]   px-[50px] my-[100px] ​ ">
                      <div
                        className=" text-sm cursor-pointer font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setQiaodan((q) => !q)}
                      >
                        Cancel
                      </div>
                      <div className="">
                        <h2 className="list-items">New Brands</h2>
                        <Link className="item-list">Brand Overview</Link>
                        <Link className="item-list">Category display</Link>
                        <Link className="item-list">Product Technology</Link>
                        <Link className="item-list"> Brand Activites </Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Corporate</h2>
                        <Link className="item-list">Corporate Events</Link>
                        <Link className="item-list">Corporate Honor</Link>
                        <Link className="item-list">Company News</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Signing</h2>
                        <Link className="item-list">Event Ressource</Link>
                        <Link className="item-list">Spokesperson</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">More Brands</h2>
                        <Link className="item-list">
                          Jordan Qiaodan Children
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* sm */}
      <div className="hidden sm:block md:hidden xl:hidden">
        <div className="flex-between p-5 ">
          <Link to="/">
            <img className="w-[100px]" src="./src/assets/logo.png" alt="" />
          </Link>
          <div className="flex-center text-2xl gap-2">
            <Link>
              <CiSearch onClick={() => setSearch(true)} />
              {search && (
                <div className="absolute top-0 left-0 bg-white w-[100%] border-b-2">
                  <div className="flex items-center justify-between px-5 ">
                    <div className="py-5 ">
                      <div className="flex w-[80vw] items-center bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl">
                        <button onClick={handleSearch} className="">
                          <CiSearch className="bg-[#ebe8e8] rounded-3xl p-[5px] text-4xl" />
                        </button>
                        <input
                          className="w-[100%] outline-none boredr-none text-base bg-transparent font-semibold"
                          type="text"
                          placeholder="Search"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      className=" cursor-pointer py-6 px-2 font-semibold text-base text-gray-600 hover:text-gray-800"
                      onClick={() => setSearch(false)}
                    >
                      Cancel
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-[80%]">
                      <h3 className="font-medium text-sm text-gray-400">
                        Popular Search
                      </h3>
                      <div className="  items-center gap-2">
                        <div className="flex gap-2 my-[50px]">
                          {DataPopular.slice(0, 2).map((e, i) => (
                            <Link
                              key={i}
                              className="px-6 py-1 bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl"
                            >
                              {e.name}
                            </Link>
                          ))}
                        </div>
                        <div className="flex gap-2 my-[20px] flex-wrap">
                          {recentSearches.length === 0 ? (
                            <span className="text-gray-500 text">
                              No recent searches...
                            </span>
                          ) : (
                            recentSearches.map((query, index) => (
                              <span
                                key={index}
                                className="px-6 py-1 bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl"
                              >
                                {query}
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Link>
            <Link>
              <CiHeart />
            </Link>
            <Link>
              <CiShoppingCart />
            </Link>
            <Link
              onClick={() => {
                setBar((e) => !e);
              }}
            >
              <HiBars4 />
            </Link>
          </div>
        </div>
        {/* list items navbar */}
        {bar && (
          <div className="">
            <div className=" w-[100%] overflow-hidden   100 opacity-50 bg-black absolute top-0  h-[100vh]"></div>
            <div className="absolute top-0 h-[100vh] bg-[#fff]  right-0">
              <div
                onClick={() => {
                  setBar((e) => !e);
                }}
                className="w-11 h-11 cursor-pointer absolute right-0 rounded-3xl text-3xl my-5  text-center text-hover "
              >
                x
              </div>
              <div className=" py-[100px] w-[300px] px-10">
                <div className="item">
                  <Link to="/nike" onClick={() => setNike((n) => !n)}>
                    Nike
                  </Link>
                  <BsChevronRight />
                </div>
                {nike && (
                  <div className="w-[100%] absolute top-0 left-0 h-[100%]  border-b-2 bg-white">
                    <div className="w-[90%] px-[50px] my-[100px]">
                      <div
                        className=" text-sm cursor-pointer font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setNike((n) => !n)}
                      >
                        Cancel
                      </div>
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Trending</Link>
                        <Link className="item-list">Shop Classics</Link>
                        <Link className="item-list">Explore</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose By Age </Link>
                        <Link className="item-list">Clothing By Age </Link>
                        <Link className="item-list">All Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                    </div>
                  </div>
                )}
                <div className="item">
                  <Link onClick={() => setSalomon((s) => !s)}>Salomon</Link>
                  <BsChevronRight />
                </div>
                {salomon && (
                  <div className="w-[100%] absolute top-0 left-0 h-[100%]  border-b-2 bg-white">
                    <div className=" w-[90%]  px-[50px] my-[100px] ​ ">
                      <div
                        className="text-sm cursor-pointer font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setSalomon((s) => !s)}
                      >
                        Cancel
                      </div>
                      <div className="">
                        <h2 className="list-items">Shoes</h2>
                        <Link className="item-list">Man</Link>
                        <Link className="item-list">Women</Link>
                        <Link className="item-list">Sportstyle</Link>
                        <Link className="item-list">Icon</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Bags & Packs</Link>
                        <Link className="item-list"> Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Bags & Packs</Link>
                        <Link className="item-list"> Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Kids</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list"> Skiing</Link>
                        <Link className="item-list">Showboarding</Link>
                      </div>
                    </div>
                  </div>
                )}
                <div className="item">
                  <Link onClick={() => setNewbalance((b) => !b)}>
                    NewBalance
                  </Link>
                  <BsChevronRight />
                </div>
                {newbalance && (
                  <div className="w-[100%] absolute top-0 left-0 h-[100%]  border-b-2 bg-white">
                    <div className=" w-[90%]   px-[50px] my-[100px]">
                      <div
                        className=" text-sm cursor-pointer font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setNewbalance((b) => !b)}
                      >
                        Cancel
                      </div>
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">Men's new arrivals </Link>
                        <Link className="item-list">Women's new arrivals</Link>
                        <Link className="item-list">Kids' new arrivals</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">New arrivals</Link>
                        <Link className="item-list">Top Style</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Age</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">New arrivals</Link>
                        <Link className="item-list">Top Style</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Age</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Kids</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Bags</Link>
                        <Link className="item-list"> All Accessories</Link>
                      </div>
                    </div>
                  </div>
                )}
                <div className="item">
                  <Link onClick={() => setAnta((a) => !a)}>Anta</Link>
                  <BsChevronRight />
                </div>
                {anta && (
                  <div className="w-[100%] absolute top-0 left-0 h-[100%]  border-b-2 bg-white">
                    <div className=" w-[90%] px-[50px] my-[100px]">
                      <div
                        className=" text-sm cursor-pointer   font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setAnta((a) => !a)}
                      >
                        Cancel
                      </div>
                      <div className="">
                        <h2 className="list-items">Basketball</h2>
                        <Link className="item-list">Kal 1</Link>
                        <Link className="item-list">Kal 1 Speed</Link>
                        <Link className="item-list">Kal 1 team</Link>
                        <Link className="item-list">KT</Link>
                        <Link className="item-list">GH</Link>
                        <Link className="item-list">Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Running</h2>
                        <Link className="item-list">C202 5 GT</Link>
                        <Link className="item-list">C202 6 Pro</Link>
                        <Link className="item-list">C202 6 </Link>
                        <Link className="item-list"> Bellero</Link>
                        <Link className="item-list">Shop Women</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Tail</h2>
                        <Link className="item-list">ANTA Swift</Link>
                        <Link className="item-list">ANTA Saker</Link>
                        <Link className="item-list">ANTA Wind Wander</Link>
                        <Link className="item-list">
                          {" "}
                          ANTA ULT Dune Runner{" "}
                        </Link>
                        <Link className="item-list">Shop Women</Link>
                        <Link className="item-list">Gits ​</Link>
                      </div>
                    </div>
                  </div>
                )}
                <div className="item">
                  <Link onClick={() => setQiaodan((q) => !q)}>Qiaodan</Link>
                  <BsChevronRight />
                </div>
                {qiaodan && (
                  <div className=" w-[100%] absolute top-0 left-0 h-[100%]  border-b-2 bg-white">
                    <div className=" w-[90%]   px-[50px] my-[100px] ​ ">
                      <div
                        className=" text-sm cursor-pointer font-semibold text-gray-600 hover:text-gray-800"
                        onClick={() => setQiaodan((q) => !q)}
                      >
                        Cancel
                      </div>
                      <div className="">
                        <h2 className="list-items">New Brands</h2>
                        <Link className="item-list">Brand Overview</Link>
                        <Link className="item-list">Category display</Link>
                        <Link className="item-list">Product Technology</Link>
                        <Link className="item-list"> Brand Activites </Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Corporate</h2>
                        <Link className="item-list">Corporate Events</Link>
                        <Link className="item-list">Corporate Honor</Link>
                        <Link className="item-list">Company News</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Signing</h2>
                        <Link className="item-list">Event Ressource</Link>
                        <Link className="item-list">Spokesperson</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">More Brands</h2>
                        <Link className="item-list">
                          Jordan Qiaodan Children
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* screen md */}
      <div className="hidden sm:hidden md:block xl:hidden">
        <div className="flex-between px-[50px] ">
          {/* logo */}
          <Link to="/">
            <img
              className="w-[130px] "
              src="./src/assets/logo.png"
              alt="logo-store"
            />
          </Link>
          {/* list brand nav */}
          <div className="z-50">
            <ul className="text-sm font-semibold flex-center gap-5 ">
              {/* Nike */}
              <li
                onMouseEnter={() => setNike(true)}
                onMouseLeave={() => setNike(false)}
                className=""
              >
                <Link to="/nike">NIKE</Link>
                {nike && (
                  <div className="flex justify-center w-[100%] absolute top-0 left-0 z-[-1] border-b-2 bg-white">
                    <div className="w-[90%] flex justify-between px-[100px] my-[100px]">
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Trending</Link>
                        <Link className="item-list">Shop Classics</Link>
                        <Link className="item-list">Explore</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose By Age </Link>
                        <Link className="item-list">Clothing By Age </Link>
                        <Link className="item-list">All Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* Anta */}
              <li
                onMouseEnter={() => setAnta(true)}
                onMouseLeave={() => setAnta(false)}
                className=""
              >
                <Link>ANTA</Link>
                {anta && (
                  <div className="flex justify-center w-[100%] absolute top-0 left-0 z-[-1] border-b-2 bg-white  ">
                    <div className=" w-[90%] flex-between px-[100px] my-[100px] ​ ">
                      <div className="">
                        <h2 className="list-items">Basketball</h2>
                        <Link className="item-list">Kal 1</Link>
                        <Link className="item-list">Kal 1 Speed</Link>
                        <Link className="item-list">Kal 1 team</Link>
                        <Link className="item-list">KT</Link>
                        <Link className="item-list">GH</Link>
                        <Link className="item-list">Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Running</h2>
                        <Link className="item-list">C202 5 GT</Link>
                        <Link className="item-list">C202 6 Pro</Link>
                        <Link className="item-list">C202 6 </Link>
                        <Link className="item-list"> Bellero</Link>
                        <Link className="item-list">Shop Women</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Tail</h2>
                        <Link className="item-list">ANTA Swift</Link>
                        <Link className="item-list">ANTA Saker</Link>
                        <Link className="item-list">ANTA Wind Wander</Link>
                        <Link className="item-list">
                          {" "}
                          ANTA ULT Dune Runner{" "}
                        </Link>
                        <Link className="item-list">Shop Women</Link>
                        <Link className="item-list">Gits ​</Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* salamon */}
              <li
                onMouseEnter={() => setSalomon(true)}
                onMouseLeave={() => setSalomon(false)}
                className=""
              >
                <Link>SALOMOM</Link>
                {salomon && (
                  <div className="flex justify-center w-[100%] absolute top-0 left-0 z-[-1] border-b-2 bg-white  ">
                    <div className=" w-[90%] flex justify-between px-[150px] my-[100px] ​ ">
                      <div className="">
                        <h2 className="list-items">Shoes</h2>
                        <Link className="item-list">Man</Link>
                        <Link className="item-list">Women</Link>
                        <Link className="item-list">Sportstyle</Link>
                        <Link className="item-list">Icon</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Bags & Packs</Link>
                        <Link className="item-list"> Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Bags & Packs</Link>
                        <Link className="item-list"> Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Kids</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list"> Skiing</Link>
                        <Link className="item-list">Showboarding</Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* newbalance */}
              <li
                onMouseEnter={() => setNewbalance(true)}
                onMouseLeave={() => setNewbalance(false)}
                className=""
              >
                <Link>NEWBALANCE</Link>
                {newbalance && (
                  <div className="flex justify-center w-[100%] absolute top-0 left-0 z-[-1] border-b-2 bg-white  ">
                    <div className=" w-[90%] flex justify-between px-[50px] my-[100px] ​ ">
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">Men's new arrivals </Link>
                        <Link className="item-list">Women's new arrivals</Link>
                        <Link className="item-list">Kids' new arrivals</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">New arrivals</Link>
                        <Link className="item-list">Top Style</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Age</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">New arrivals</Link>
                        <Link className="item-list">Top Style</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Age</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Kids</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Bags</Link>
                        <Link className="item-list"> All Accessories</Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* qiaodan */}
              <li
                onMouseEnter={() => setQiaodan(true)}
                onMouseLeave={() => setQiaodan(false)}
                className=""
              >
                <Link>QIAODAN</Link>
                {qiaodan && (
                  <div className="flex justify-center w-[100%] absolute top-0 left-0 z-[-1] border-b-2 bg-white  ">
                    <div className=" w-[90%] flex justify-between px-[50px] my-[100px] ​ ">
                      <div className="">
                        <h2 className="list-items">New Brands</h2>
                        <Link className="item-list">Brand Overview</Link>
                        <Link className="item-list">Category display</Link>
                        <Link className="item-list">Product Technology</Link>
                        <Link className="item-list"> Brand Activites </Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Corporate</h2>
                        <Link className="item-list">Corporate Events</Link>
                        <Link className="item-list">Corporate Honor</Link>
                        <Link className="item-list">Company News</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Signing</h2>
                        <Link className="item-list">Event Ressource</Link>
                        <Link className="item-list">Spokesperson</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">More Brands</h2>
                        <Link className="item-list">
                          Jordan Qiaodan Children
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
          {/* list icon */}
          <div className="flex z-50">
            <div className="">
              <Link onClick={() => setSearch(true)}>
                <CiSearch className="text-3xl" />
              </Link>
              {search && (
                <div className="absolute top-0 left-0 bg-white w-[100%] px-[20px] border-b-2">
                  <div className="flex-between">
                    <img
                      className="w-[100px]"
                      src="./src/assets/logo.png"
                      alt="Logo"
                    />
                    <div className="py-5">
                      <div className="flex w-[70vw] items-center bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl">
                        <button onClick={handleSearch} className="">
                          <CiSearch className="bg-[#ebe8e8] rounded-3xl p-[5px] text-4xl" />
                        </button>
                        <input
                          className="w-[100%] outline-none boredr-none bg-transparent font-semibold"
                          type="text"
                          placeholder="Search"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      className=" cursor-pointer py-5 font-semibold text-gray-600 hover:text-gray-800"
                      onClick={() => setSearch(false)}
                    >
                      Cancel
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-[80%]">
                      <h3 className="font-semibold text-gray-400">
                        Popular Search
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2 my-[50px]">
                          {DataPopular.slice(0, 5).map((e, i) => (
                            <Link
                              key={i}
                              className="px-6 py-1 bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl"
                            >
                              {e.name}
                            </Link>
                          ))}
                        </div>
                        <div className="flex gap-2 my-[20px] flex-wrap">
                          {recentSearches.length === 0 ? (
                            <span className="text-gray-500">
                              No recent searches...
                            </span>
                          ) : (
                            recentSearches.map((query, index) => (
                              <span
                                key={index}
                                className="px-6 py-1 bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl"
                              >
                                {query}
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link className=" px-2 ">
              <CiHeart className="text-3xl" />
            </Link>
            <Link>
              <CiShoppingCart className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
      {/* screen xl */}
      <div className="hidden sm:hidden md:hidden xl:block">
        <div className="flex-between px-[100px] ">
          {/* logo */}
          <Link to="/">
            <img
              className="w-[130px] "
              src="./src/assets/logo.png"
              alt="logo-store"
            />
          </Link>
          {/* list brand nav */}
          <div className="z-50">
            <ul className="text-sm font-semibold flex-center gap-5 ">
              {/* Nike */}
              <li
                onMouseEnter={() => setNike(true)}
                onMouseLeave={() => setNike(false)}
                className=""
              >
                <Link to="/nike">NIKE</Link>
                {nike && (
                  <div className="flex justify-center w-[100%] absolute top-0 left-0 z-[-1] border-b-2 bg-white">
                    <div className="w-[65%] flex justify-between px-[150px] my-[100px]">
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Trending</Link>
                        <Link className="item-list">Shop Classics</Link>
                        <Link className="item-list">Explore</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">New</Link>
                        <Link className="item-list">Shose By Age </Link>
                        <Link className="item-list">Clothing By Age </Link>
                        <Link className="item-list">All Clothing</Link>
                        <Link className="item-list">Shop by Sport </Link>
                        <Link className="item-list">Accessoris</Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* Anta */}
              <li
                onMouseEnter={() => setAnta(true)}
                onMouseLeave={() => setAnta(false)}
                className=""
              >
                <Link>ANTA</Link>
                {anta && (
                  <div className="flex justify-center w-[100%] absolute top-0 left-0 z-[-1] border-b-2 bg-white  ">
                    <div className=" w-[65%] flex justify-between px-[200px] my-[100px] ​ ">
                      <div className="">
                        <h2 className="list-items">Basketball</h2>
                        <Link className="item-list">Kal 1</Link>
                        <Link className="item-list">Kal 1 Speed</Link>
                        <Link className="item-list">Kal 1 team</Link>
                        <Link className="item-list">KT</Link>
                        <Link className="item-list">GH</Link>
                        <Link className="item-list">Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Running</h2>
                        <Link className="item-list">C202 5 GT</Link>
                        <Link className="item-list">C202 6 Pro</Link>
                        <Link className="item-list">C202 6 </Link>
                        <Link className="item-list"> Bellero</Link>
                        <Link className="item-list">Shop Women</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Tail</h2>
                        <Link className="item-list">ANTA Swift</Link>
                        <Link className="item-list">ANTA Saker</Link>
                        <Link className="item-list">ANTA Wind Wander</Link>
                        <Link className="item-list">
                          {" "}
                          ANTA ULT Dune Runner{" "}
                        </Link>
                        <Link className="item-list">Shop Women</Link>
                        <Link className="item-list">Gits ​</Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* salamon */}
              <li
                onMouseEnter={() => setSalomon(true)}
                onMouseLeave={() => setSalomon(false)}
                className=""
              >
                <Link>SALOMOM</Link>
                {salomon && (
                  <div className="flex justify-center w-[100%] absolute top-0 left-0 z-[-1] border-b-2 bg-white  ">
                    <div className=" w-[65%] flex justify-between px-[200px] my-[100px] ​ ">
                      <div className="">
                        <h2 className="list-items">Shoes</h2>
                        <Link className="item-list">Man</Link>
                        <Link className="item-list">Women</Link>
                        <Link className="item-list">Sportstyle</Link>
                        <Link className="item-list">Icon</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Bags & Packs</Link>
                        <Link className="item-list"> Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list">Bags & Packs</Link>
                        <Link className="item-list"> Accessories</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Kids</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list"> Skiing</Link>
                        <Link className="item-list">Showboarding</Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* newbalance */}
              <li
                onMouseEnter={() => setNewbalance(true)}
                onMouseLeave={() => setNewbalance(false)}
                className=""
              >
                <Link>NEWBALANCE</Link>
                {newbalance && (
                  <div className="flex justify-center w-[100%] absolute top-0 left-0 z-[-1] border-b-2 bg-white  ">
                    <div className=" w-[65%] flex justify-between px-[200px] my-[100px] ​ ">
                      <div className="">
                        <h2 className="list-items">New</h2>
                        <Link className="item-list">Men's new arrivals </Link>
                        <Link className="item-list">Women's new arrivals</Link>
                        <Link className="item-list">Kids' new arrivals</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Man</h2>
                        <Link className="item-list">New arrivals</Link>
                        <Link className="item-list">Top Style</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Age</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Women</h2>
                        <Link className="item-list">New arrivals</Link>
                        <Link className="item-list">Top Style</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Age</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Kids</h2>
                        <Link className="item-list">Shoes</Link>
                        <Link className="item-list">Sport</Link>
                        <Link className="item-list">Clothing</Link>
                        <Link className="item-list"> Accessories and Bags</Link>
                        <Link className="item-list"> All Accessories</Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* qiaodan */}
              <li
                onMouseEnter={() => setQiaodan(true)}
                onMouseLeave={() => setQiaodan(false)}
                className=""
              >
                <Link>QIAODAN</Link>
                {qiaodan && (
                  <div className="flex justify-center w-[100%] absolute top-0 left-0 z-[-1] border-b-2 bg-white  ">
                    <div className=" w-[65%] flex justify-between px-[200px] my-[100px] ​ ">
                      <div className="">
                        <h2 className="list-items">New Brands</h2>
                        <Link className="item-list">Brand Overview</Link>
                        <Link className="item-list">Category display</Link>
                        <Link className="item-list">Product Technology</Link>
                        <Link className="item-list"> Brand Activites </Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Corporate</h2>
                        <Link className="item-list">Corporate Events</Link>
                        <Link className="item-list">Corporate Honor</Link>
                        <Link className="item-list">Company News</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">Signing</h2>
                        <Link className="item-list">Event Ressource</Link>
                        <Link className="item-list">Spokesperson</Link>
                      </div>
                      <div className="">
                        <h2 className="list-items">More Brands</h2>
                        <Link className="item-list">
                          Jordan Qiaodan Children
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
          {/* list icon */}
          <div className="flex z-50">
            <div className="">
              <Link onClick={() => setSearch(true)}>
                <CiSearch className="text-3xl" />
              </Link>
              {search && (
                <div className="absolute top-0 left-0 bg-white w-[100%] px-[50px] border-b-2">
                  <div className="flex-between">
                    <img
                      className="w-[100px]"
                      src="./src/assets/logo.png"
                      alt="Logo"
                    />
                    <div className="py-5">
                      <div className="flex w-[80vw] items-center bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl">
                        <button onClick={handleSearch} className="">
                          <CiSearch className="bg-[#ebe8e8] rounded-3xl p-[5px] text-4xl" />
                        </button>
                        <input
                          className="w-[100%] outline-none boredr-none bg-transparent font-semibold"
                          type="text"
                          placeholder="Search"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      className=" cursor-pointer py-5 font-semibold text-gray-600 hover:text-gray-800"
                      onClick={() => setSearch(false)}
                    >
                      Cancel
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-[80%]">
                      <h3 className="font-semibold text-gray-400">
                        Popular Search
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2 my-[50px]">
                          {DataPopular.slice(0, 5).map((e, i) => (
                            <Link
                              key={i}
                              className="px-6 py-1 bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl"
                            >
                              {e.name}
                            </Link>
                          ))}
                        </div>
                        <div className="flex gap-2 my-[20px] flex-wrap">
                          {recentSearches.length === 0 ? (
                            <span className="text-gray-500">
                              No recent searches...
                            </span>
                          ) : (
                            recentSearches.map((query, index) => (
                              <span
                                key={index}
                                className="px-6 py-1 bg-[#ebe8e8] hover:bg-[#f7f3f3] rounded-3xl"
                              >
                                {query}
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link className=" px-2 ">
              <CiHeart className="text-3xl" />
            </Link>
            <Link>
              <CiShoppingCart className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
