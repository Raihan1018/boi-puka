import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl p-6">
          <figure className="bg-gray-600 py-8 rounded-lg">
            <img src={image} className="h-[200px]" alt={bookName} />
          </figure>
          <div className="card-body">
            <div className="flex justify-center  gap-4 ">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="btn btn-xs bg-green-200 text-green-700"
                >
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p>By: {author}</p>
            <div className="divider"></div>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{category}</div>
              <div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
