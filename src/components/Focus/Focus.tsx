import React from "react";

const Focus = () => {
  return (
    <div className=" w-auto flex-col  justify-center  lg:w-[1170] lg:h-[268] lg:mt-20  lg:justify-center lg:items-center bg-opacity-100 ml-20 text-opacity-100">
      <h1 className="text-gray-400 text-opacity-100 text-3xl ml-10 mb-5 text-start">Main Focus/Mission Statement</h1>
      <div className="lg:flex justify-center opacity-100 ml-20 items-center ">
        <div className="flex flex-col md:flex-row md:justify-center md:w-[300px]">
          <h1 className=" text-8xl text-gray-100 text-opacity-100">1</h1>
          <p className="pr-8 pl-4 text-sm text-opacity-100 text-gray-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            corporis iure eos optio dignissimos quasi ipsam 
        
          </p>
        </div>
        <div className="flex flex-col w-auto lg:flex-row justify-center opacity-100 lg:w-[500px]">
          <h1  className="  ml-20 text-8xl text-gray-100 text-opacity-100">2</h1>
          <p className="pl-4 text-sm pr-20 text-gray-900 text-opacity-100 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis modi, nobis sequi non cum doloremque praesentium,
            delectus culpa accusamus quibusdam earum laborum exercitationem
        
          </p>
        </div>
      </div>
    </div>
  );
};

export default Focus;
