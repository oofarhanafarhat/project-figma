import React from "react";
import Image from "next/image";
import Link from "next/link";

const Proj = () => {
  return (
    <div className="  w- auto md:w-[1170px] md:h-[765]">
      <h1 className="text-gray-400 text-opacity-100 text-4xl ml-10  mb-10">
        0ur Projects
      </h1>
      <div className="flex-col space-y-3  w-auto lg:flex lg:flex-row lg:space-x-4 lg:justify-center lg:ml-10">
        <div className=" w-auto  h-auto lg:w-[570px] lg:h-[255] bg-gray-900 text-gray-100 ">
          <h1 className="ml-6 text-3xl mt-10  text-opacity-100 ">Sample </h1>
          <h1 className="ml-6 text-3xl text-opacity-100 ">Project</h1>
          <button className="text-sm  hover:border-2 hover:border-gray-300 hover:transition-300 transform hover:scale-100 ml-10 mt-5 p-2 border-opacity-100 rounded-lg">
            {" "}
            View More →{" "}
          </button>
        </div>
        <div>
          <Image src="/image02.png" width={570} height={255} alt="pic here" className="mb-5 md:w-570 md:h-255" />
        </div>
      </div>
      <div className="flex-col mb-5 space-y-4 w-auto justify-center md:flex md:flex-row md:space-x-4 md:ml-10 md:w-270 md:h-255 ">
        <Image src="/image03.png" width={270} height={255} alt=""  className="w-96 items-center  lg:w-270 lg:ml-0"/>
        <Image src="/image04.png" width={470} height={255} alt="" className=" lg:ml-0"/>
        <Image src="/image05.png" width={370} height={255} alt="" className=" lg:ml-0"/>
      </div>
      <div className=" sm:justify-center md:flex md:justify-end">
        <Link href="#">
          {" "}
          <button className=" py-2 rounded-lg px-4 bg-gray-900 mt-6 hover:border-2 border-gray-400 border-opacity-100 hover:transition-300 tarnsform hover:scale-105 hover:border-gray-400 text-gray-300 text-opacity-100 ">
            {" "}
            All Pojects →{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Proj;
