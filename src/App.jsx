import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NotesSection from "./components/NotesSection";
import myReducer from "./myReducer";
import { useReducer, useState } from "react";
const App = () => {
  const [allNotes, dispatch] = useReducer(myReducer,[]);
  const [sort, setSort] = useState("oldest");
  const deleteHandler = (id) => {
    dispatch({
      type: "delete",
      id: id,
    });
  };
  const checkHandler = (id) => {
    dispatch({
      type: "check",
      id,
    });
  };
  const handleAddNote = (newNote) => {
    dispatch({
      type: "add",
      newNote,
    });
  };
  return (
    <div className="wrapper">
      <div className="app">
        <NoteHeader allNotes={allNotes} sort={sort} setSort={setSort} />
        <NotesSection
          sort={sort}
          allNotes={allNotes}
          onAddNote={handleAddNote}
          deleteHandler={deleteHandler}
          checkHandler={checkHandler}
        />
      </div>
    </div>
  );
};

export default App;
