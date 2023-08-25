import { BsTrash } from "react-icons/bs";
const NoteFunctions = ({ id, deleteHandler, checkHandler }) => {
  return (
    <div className="note-functions">
      <span onClick={() => deleteHandler(id)}>
        <BsTrash />
      </span>
      <input
        onClick={() => checkHandler(id)}
        className="note-functions-checkbox"
        type="checkbox"
      />
    </div>
  );
};

export default NoteFunctions;
