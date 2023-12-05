import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
const NotesSection = ({}) => {
  return (
    <section className="notes-section">
      <AddNewNote />
      <NoteList />
    </section>
  );
};

export default NotesSection;
