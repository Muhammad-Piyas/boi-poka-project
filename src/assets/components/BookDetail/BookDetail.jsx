import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  //   console.log(data, book, bookId, id);
  const { bookId: currentBook, image, bookName } = book;
  return (
    <div className="my-6">
      <h1>Book Detail: {bookId}</h1>
      <img className="h-[166px]" src={image} alt="" />
      <p>Name: {bookName}</p>
      <br />
      <button className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
      <button className="btn btn-active btn-accent">Add to WishList</button>
    </div>
  );
};

export default BookDetail;
