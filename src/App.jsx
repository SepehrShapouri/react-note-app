import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NotesSection from "./components/NotesSection";
import { useState } from "react";
const App = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [sort, setSort] = useState("oldest");
  const deleteHandler = (id) => {
    setAllNotes((prevNote) => prevNote.filter((n) => n.id != id));
  };
  const checkHandler = (id) => {
    setAllNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id == id ? { ...note, completed: !note.completed } : note
      )
    );
  };
  const handleAddNote = (newNote) => {
    setAllNotes((prevState) => [...prevState, newNote]);
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
