import React from "react";

const BookCard = ({ book }) => {
  const { title, image, author, price } = book;
  return (
    <div className="p-4 border border-slate-200 rounded-xl shadow-xl">
      <img src={image} className="rounded-lg h-[500px] md:h-[400px] w-full" />
      <p className="text-xl font-bold mt-4">{title}</p>
      <p className="text-xl mt-8 text-gray-500">{author}</p>
      <p className="text-xl font-bold mt-4 text-primary">BDT {price}</p>
      {/* Underline */}
      <hr className="text-gray-400 my-3" />
      {/* Button */}
      <div className="w-full flex justify-between">
        <button className="border px-3 py-1 rounded-sm bg-secondary hover:bg-primary border-none text-lg font-bold text-white">
          Order Now
        </button>
        <button className="border px-3 py-1 rounded-sm bg-primary hover:bg-secondary border-none text-lg font-bold text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
