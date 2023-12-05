import { useNotes } from "../context/NotesContext";
import { useSort } from "../context/SortContext";
import SortDropDown from "./SortDropDown";

const NoteHeader = () => {
  const allNotes = useNotes()
  console.log(allNotes)
  return (
    <header className="app-header">
      <h1 className="header-title">My Notes ({allNotes.length})</h1>
      <SortDropDown />
    </header>
  );
};

export default NoteHeader;
