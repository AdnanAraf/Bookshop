import React from "react";

const Cover = () => {
  return (
    <div className="">
      <div className="flex gap-[100px]">
        <div className="mx-[80px] p-[40px] mt-[100px]">
          <h1 className="text-[35px] font-bold ">
            A reader lives a <br></br>thousand lives{" "}
            <span className="text-lime-800">before he dies</span>
          </h1>
          <p className="w-[500px] my-[20px] text-[18px]">
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
          <div>
            <div className="bg-lime-700 h-[50px] w-[150px] px-[30px] py-[10px] rounded-lg">
              <button className="text-white font-semibold">Visit Store</button>
            </div>
          </div>
        </div>
        <div className="my-[20px]">
          <img src="/public/realistic-book-cover-presentation_1310-24-removebg-preview (2).png"></img>
        </div>
      </div>
    </div>
  );
};

export default Cover;
