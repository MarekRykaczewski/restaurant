import React from "react";
import Image from "next/image";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className="flex-1 flex flex-col justify-center items-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fries
        </h1>
        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          adipisci magni odit accusantium laboriosam, harum dolore corrupti
          iusto saepe non neque soluta, unde quo dolores!
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order now
        </button>
      </div>
      <div className="flex-1 w-full relative md:h-full">
        <Image
          className="object-contain"
          src={"/offerProduct.png"}
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default Offer;
