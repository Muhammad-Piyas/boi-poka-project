import { key } from "localforage";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags, category } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div className="card bg-base-100 p-6 w-96 shadow-xl">
        <figure className="py-8 bg-gray-200 rounded-2xl">
          <img className="h-[166px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="space-x-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn border-none hover:text-green-700 text-green-600 btn-xs hover:bg-green-200 bg-green-100"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>by: {author}</p>

          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div>{category}</div>
            <div className="rating space-x-2 ">
              <p>{rating}</p>
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
