import { BsTrash } from "react-icons/bs";
import { useNotesDispatch } from "../context/NotesContext";
const NoteFunctions = ({ id }) => {
  const dispatch = useNotesDispatch();
  return (
    <div className="note-functions">
      <span
        onClick={() =>
          dispatch({
            type: "delete",
            id: id,
          })
        }
      >
        <BsTrash />
      </span>
      <input
        onClick={() =>
          dispatch({
            type: "check",
            id,
          })
        }
        className="note-functions-checkbox"
        type="checkbox"
      />
    </div>
  );
};

export default NoteFunctions;
