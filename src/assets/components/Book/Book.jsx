const Book = ({ book }) => {
  const { bookName, author, image, rating } = book;
  return (
    <div className="card bg-base-100 p-6 w-96 shadow-xl">
      <figure className="py-8 bg-gray-200 rounded-2xl">
        <img className="h-[166px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>by: {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
