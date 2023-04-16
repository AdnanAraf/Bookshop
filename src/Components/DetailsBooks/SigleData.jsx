import React from "react";
import { Link } from "react-router-dom";

const SigleData = ({ books }) => {
  // console.log(books);
  const { image, title, price, subtitle, isbn13 } = books;
  return (
    <Link to={`../books/${books.isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:translate-y-2 ">
        <img className=" shadow-lg m-[25px] rounded-lg" src={books.image}></img>
        <div className="bg-black bg-opacity-75 duration-200 opacity-0 hover:opacity-100 rounded-lg absolute text-gray-300 inset-4 p-[50px]">
          <p className="font-bold text-center text-2xl ">{books.title}</p>
          <br></br>
          <p className="">{books.subtitle.substring(0, 78)}.....</p>
          <br></br>
          <p className="absolute bottom-5 left-50   font-bold">
            Price: {books.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SigleData;
