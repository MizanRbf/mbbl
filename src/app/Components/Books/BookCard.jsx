import React from "react";

const BookCard = ({ book }) => {
  const { title, image, author } = book;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default BookCard;
