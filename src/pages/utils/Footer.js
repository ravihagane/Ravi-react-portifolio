import React from "react";

export default function footer() {
  return (
    <div>
      <div className="flex flex-row min-h-screen bg-black bg-opacity-80  items-center justify-center">
        <div className="flex flex-col align-middle items-center justify-center mr-96">
          <span className=" text-yellow-50 text-2xl mt-10">Contact Me</span>
          <form className="flex flex-col md:items-center justify-center">
            <input
              type="email"
              placeholder="Email"
              className=" p-3 px-10 m-5"
            ></input>
            <input type="text" placeholder="Message" className="p-10"></input>
            <button className=" mt-5 p-3 px-8 bg-white text-center hover:bg-yellow-400">
              Send
            </button>
          </form>
          <span className=" text-yellow-50 mt-10 self-end items-end">
            Copy right &#169; 2021 All rights reserved
          </span>
        </div>

        <div className="flex flex-col align-middle items-center justify-center ">
          <span className=" text-yellow-50 text-2xl mb-40">Social</span>
          <div className="flex flex-row">
            <img src="twitter.svg" alt="twitter" className=" w-10 "></img>
            <img src="github.svg" alt="github" className=" w-10 m-10 "></img>
            <img src="linkedin.svg" alt="linkedin" className="w-10"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
