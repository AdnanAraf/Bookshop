import React, { useEffect, useState } from "react";
// import Details from "../Bookdetails/Details";
import SigleData from "../DetailsBooks/SigleData";

const Booksdata = () => {
  const [book, setdata] = useState([]);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => setdata(data.books));
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-4  shadow-black-500">
        {book.map((item) => (
          <SigleData key={item.isbn13} books={item}></SigleData>
        ))}
      </div>
    </div>
  );
};

export default Booksdata;
