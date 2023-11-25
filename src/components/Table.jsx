/* eslint-disable react/prop-types */
import BookRow from "./BookRow";

const Table = (props) => {
  const { setBook, books } = props;

  function remove() {
    setBook([]);
  }

  function deleteRow(id) {
    const restBooks = books.filter((book) => book.isbn !== id);
    setBook(restBooks);
  }

  return (
    <div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN#</th>
              <th>Publish_Year</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <BookRow deleteRow={deleteRow} key={book.isbn} book={book} />
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={remove} className="btn btn-danger btn-md">
        Remove All
      </button>
    </div>
  );
};

export default Table;
