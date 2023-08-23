import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NotesSection from "./components/NotesSection";
import { useState } from "react";
const App = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const clickHandler = (e) => {
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setAllNotes([...allNotes, newNote]);
    setTitle("");
    setDescription("");
  };
  const deleteHandler = (id) => {
    const allFilteredNotes = [...allNotes];
    const filteredNotes = allFilteredNotes.filter((n) => {
      return JSON.stringify(n.id) != JSON.stringify(id);
    });
    setAllNotes(filteredNotes);
  };
  const checkHandler = (id) => {
    const allFilteredNotes = [...allNotes];
    const filteredNotes = allFilteredNotes.filter((n) => {
      return JSON.stringify(n.id) == JSON.stringify(id);
    });
    filteredNotes[0].completed = !filteredNotes[0].completed;
    const index = allFilteredNotes.indexOf(filteredNotes[0]);
    allFilteredNotes[index] = filteredNotes[0];
    setAllNotes(allFilteredNotes);
  };
  const sortHandler = (e) => {};
  return (
    <div className="wrapper">
      <div className="app">
        <NoteHeader allNotes={allNotes} sortHandler={sortHandler} />
        <NotesSection
          title={title}
          description={description}
          setDescription={setDescription}
          setTitle={setTitle}
          clickHandler={clickHandler}
          allNotes={allNotes}
          setAllNotes={setAllNotes}
          deleteHandler={deleteHandler}
          checkHandler={checkHandler}
        />
      </div>
    </div>
  );
};

export default App;
