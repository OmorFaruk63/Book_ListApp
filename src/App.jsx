import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

export const App = () => {
  // main array of objects state || books state || books array of objects

  const [books, setBook] = useState(getData());

  // saving data to local storage

  useEffect(() => {
    const data = JSON.stringify(books);
    localStorage.setItem("books", data);
  }, [books]);

  function getData() {
    const storedBooks = JSON.parse(localStorage.getItem("books")) ?? [];
    return storedBooks;
  }

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <Form books={books} setBook={setBook} />
        </div>

        <div style={{ border: "1px solid red" }} className="view-container">
          <Table setBook={setBook} books={books} />
        </div>
      </div>
    </div>
  );
};

export default App;
