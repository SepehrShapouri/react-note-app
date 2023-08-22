import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NotesSection from "./components/NotesSection";
import { useState } from "react";
const App = () => {
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
    id: "",
    date: "",
    completed: false,
  });
  const [allNotes, setAllNotes] = useState([]);
  const clickHandler = (e) => {
    if (newNote.title == "") {
      alert("fill the form");
    } else {
      setAllNotes([...allNotes, newNote]);
    }
  };
  const changeHandler = (e) => {
    const id = new Date().getTime();
    const date = new Date().toLocaleDateString();
    const value = e.target.value;
    const name = e.target.name;
    setNewNote({
      ...newNote,
      [name]: value,
      id: id,
      date: date,
      completed: false,
    });
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
  const sortHandler = (e)=>{
  }
  return (
    <div className="wrapper">
      <div className="app">
        <NoteHeader allNotes={allNotes} sortHandler={sortHandler} />
        <NotesSection
          clickHandler={clickHandler}
          changeHandler={changeHandler}
          newNote={newNote}
          setNewNote={setNewNote}
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
