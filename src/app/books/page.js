import React from "react";
import BookCard from "../Components/Books/BookCard";
const books = [
  {
    book_id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    price: 45.99,
    published_year: 2008,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX374_BO1,204,203,200_.jpg",
  },
  {
    book_id: 2,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    category: "JavaScript",
    price: 39.99,
    published_year: 2015,
    image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
  },
  {
    book_id: 3,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    category: "JavaScript",
    price: 34.5,
    published_year: 2018,
    image: "https://eloquentjavascript.net/img/cover.jpg",
  },
  {
    book_id: 4,
    title: "Design Patterns",
    author: "Erich Gamma",
    category: "Software Engineering",
    price: 49.99,
    published_year: 1994,
    image: "https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg",
  },
  {
    book_id: 5,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    category: "Algorithms",
    price: 59.99,
    published_year: 2009,
    image: "https://images-na.ssl-images-amazon.com/images/I/61Mw06x2XcL.jpg",
  },
  {
    book_id: 6,
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    category: "Database",
    price: 54.99,
    published_year: 2011,
    image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
  },
];

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 text-center py-10">
      {/* Title */}
      <p className="text-4xl font-bold text-primary mb-10 underline">Books</p>
      {/* Books */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.book_id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default page;
