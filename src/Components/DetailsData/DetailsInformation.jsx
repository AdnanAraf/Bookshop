import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsInformation = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="h-[500px] w-[800px] border-2 mx-[25%] mt-[40px]">
      <div className="flex  ">
        <div>
          <img src={data.image}></img>
        </div>
        <div className="my-[50px]">
          <h1>
            <span className="font-bold">TITLE:</span>
            {data.title}
          </h1>
          <h1>
            <span className="font-bold">SUBTITLE:</span>
            {data.subtitle}
          </h1>
          <h1>
            <span className="font-bold">AUTHORS:</span>
            {data.authors}
          </h1>
          <p>
            <span className="font-bold">PUBLISHER:</span>
            {data.publisher}
          </p>
          <p>
            <span className="font-bold">YEAR: </span>
            {data.year}
          </p>

          <p>
            <span className="font-bold">RATING: </span>
            {data.rating}
          </p>
          <p>
            <span className="font-bold">PRICE: </span>
            {data.price}
          </p>
          <p className="w-[420px]">
            <span className="font-bold">DESCRIPTION:</span>
            {data.desc}
          </p>
          <div className="bg-lime-900 h-[50px] w-[120px] mt-[10px] rounded-lg">
            <button className="px-[25px] py-[10px] text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsInformation;
