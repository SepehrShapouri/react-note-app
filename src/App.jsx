import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Note from "./components/Note";
import NoteFilters from "./components/NoteFilters";
import NoteHeader from "./components/NoteHeader";
const App = () => {
  return (
    <div className="wrapper">
      <div className="app">
        <NoteHeader/>
        <section className="notes-section">
          <AddNewNote />
          <div className="all-notes-section">
            <NoteFilters />
            <div className="all-notes-list">
              <Note />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
