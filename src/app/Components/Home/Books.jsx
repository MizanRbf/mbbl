import React from "react";

const books = [
  {
    book_id: 2,
    title: "RDBMS",
    author: "Mizan Rbf",
    category: "Database",
    price: 50,
    published_year: 2015,
    image: "https://i.ibb.co.com/yccBjB5P/Screenshot-2026-01-11-001358.png",
  },
  {
    book_id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    price: 150,
    published_year: 2008,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX374_BO1,204,203,200_.jpg",
  },
  {
    book_id: 3,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    category: "JavaScript",
    price: 350,
    published_year: 2018,
    image: "https://eloquentjavascript.net/img/cover.jpg",
  },
  {
    book_id: 4,
    title: "Design Patterns",
    author: "Erich Gamma",
    category: "Software Engineering",
    price: 50,
    published_year: 1994,
    image: "https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg",
  },
  {
    book_id: 5,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    category: "Algorithms",
    price: 80,
    published_year: 2009,
    image: "https://images-na.ssl-images-amazon.com/images/I/61Mw06x2XcL.jpg",
  },
  {
    book_id: 6,
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    category: "Database",
    price: 120,
    published_year: 2011,
    image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
  },
];
import { GiBookshelf } from "react-icons/gi";
import BookCard from "../Books/BookCard";
const Books = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      {/* Title */}
      <div className=" mb-10 py-4 rounded-lg bg-gradient-to-b from-primary to-[#1c4703] flex justify-center gap-2">
        <GiBookshelf className=" text-white text-4xl" />
        <p className="text-4xl font-bold text-white">BookVault</p>
      </div>
      {/* Books */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.book_id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
