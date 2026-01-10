import React from "react";

const BookCard = ({ book }) => {
  const { title, image, author } = book;
  return (
    <div>
      <img src={image} />
      <p>{title}</p>
    </div>
  );
};

export default BookCard;
