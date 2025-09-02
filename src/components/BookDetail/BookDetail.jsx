import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  console.log(book);

  return (
    <div className="my-5">
      <h2>BookDetail: {bookId}</h2>
      <img src={image} alt={bookName} /> <br />
      <button className="btn btn-primary">Read</button>
      <button className="btn btn-secondary">Wish List</button>
    </div>
  );
};

export default BookDetail;
