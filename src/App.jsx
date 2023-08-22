import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NotesSection from "./components/NotesSection";
const App = () => {
  return (
    <div className="wrapper">
      <div className="app">
        <NoteHeader/>
        <NotesSection/>
      </div>
    </div>
  );
};

export default App;
