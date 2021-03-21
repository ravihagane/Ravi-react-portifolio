import React from "react";

export default function hero() {
  return (
    <div className="  flex flex-row border-b-4 font-sans font-bold text-3xl align-middle">
      <div className="w-2/3  h-1/2 flex flex-col items-center justify-center justify-items-center mt-52">
        <div>
          Hello! I'm
          <span className=" font-extrabold text-yellow-600"> Ravi reddy</span>
        </div>
        <div>I'm a Full-stack developer</div>
        <div className=" flex flex-row mt-7  text-base">
          <button className=" px-5 py-3  border-indigo-900 border-2 mx-5 hover:bg-black hover:text-green-50">
            View more
          </button>
          <button className=" px-5 py-3  border-yellow-600 border-2 hover:bg-black hover:text-green-50  hover:border-opacity-0  mx-5">
            Resume
          </button>
        </div>
      </div>
      <div className=" bg-yellow-400 w-1/3  h-1/2 items-center">
        <img src="DP1.png" alt="pic" className=" w-10/12 h-1/2 "></img>
      </div>
    </div>
  );
}
