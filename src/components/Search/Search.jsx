import React from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { GiHotMeal } from "react-icons/gi";

const Search = () => {
  return (
    <div className="search flex flex-col gap-5 rounded-md p-7 w-[80%] mx-auto border-b-2 border-LightGray">
      <form action="">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-3 border-LightGray rounded-md p-3 shadow-LightGray justify-center">
          <div className="flex gap-2 items-center">
            <BiSearch size={25} className="icon" />
            <input
              type="text"
              placeholder="Search Restaurant"
              className="bg-transparent focus:outline-none w-full capitalize"
            />
          </div>
          <div className="flex gap-2 items-center">
            <GiHotMeal size={25} className="icon" />
            <input
              type="text"
              placeholder="Search By cuisine"
              className="bg-transparent focus:outline-none w-full capitalize"
            />
          </div>
          <div className="flex gap-2 items-center">
            <BiCurrentLocation size={25} className="icon" />
            <input
              type="text"
              placeholder="Search By Location"
              className="bg-transparent focus:outline-none w-full capitalize"
            />
          </div>
          <button className="bg-blue-500 text-white p-3 h-full cursor-pointer px-10 rounded-md hover:bg-DeepBlue">
            Search
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-5 sm:flex-row sm:gap-3 p-3 shadow-LightGray justify-center items-center">
        <div className="flex items-center gap-2">
          <label htmlFor="relevance" className="text-gray-500 font-semibold">
            Sort By:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-sm py-1 pr-[1.75rem] focus:outline-none border-2 border-LightGray w-28"
          >
            <option value="" className="border-2 border-LightGray">Rating</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="level" className="text-gray-500 font-semibold">
            Cuisine:
          </label>
          <select
            name=""
            id="level"
            className="bg-white rounded-sm py-1 pr-[1.75rem] focus:outline-none border-2 border-LightGray w-28"
          >
            <option value="" className="border-2 border-LightGray">Buffet</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="type" className="text-gray-500 font-semibold">
            Hours:
          </label>
          <select
            name=""
            id="type"
            className="bg-white rounded-sm py-1 pr-[1.75rem] focus:outline-none border-2 border-LightGray w-36"
          >
            <option value="" className="border-2 border-LightGray">Open now</option>
          </select>
        </div>
        <span className="text-gray cursor-pointer">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
