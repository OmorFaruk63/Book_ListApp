/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = (props) => {
  const { books, setBook } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");
  const [pubYear, setPubYear] = useState("");

  // form submit event
  function formHandle(e) {
    e.preventDefault();
  }

  // books add
  function bookHandle() {
    const book = {
      title,
      author,
      isbn,
      pubYear,
    };
    setBook([...books, book]);
    console.log(books);
    clearInput();
  }

  function clearInput() {
    setPubYear("");
    setISBN("");
    setAuthor("");
    setTitle("");
  }

  return (
    <div>
      <form onClick={formHandle} className="form-group">
        <label>Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          className="form-control"
          required
        ></input>
        <br></br>

        <label>Author</label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          value={author}
          className="form-control"
          required
        ></input>
        <br></br>

        <label>ISBN#</label>
        <input
          onChange={(e) => setISBN(e.target.value)}
          type="text"
          value={isbn}
          className="form-control"
          required
        ></input>
        <br></br>

        <label>Publish Year</label>
        <input
          onChange={(e) => setPubYear(e.target.value)}
          type="text"
          value={pubYear}
          className="form-control"
          required
        ></input>
        <br></br>

        <button
          onClick={bookHandle}
          type="submit"
          className="btn btn-success btn-md"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Form;
