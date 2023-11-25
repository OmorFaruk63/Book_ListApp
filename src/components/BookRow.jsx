/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

const BookRow = (props) => {
  const { title, author, isbn, pubYear } = props.book;
  const deleteRow = props.deleteRow;

  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{isbn}</td>
      <td>{pubYear}</td>
      <td onClick={() => deleteRow(isbn)}>
        <MdDelete style={{ color: "red", cursor: "pointer" }} />
      </td>
    </tr>
  );
};
export default BookRow;
