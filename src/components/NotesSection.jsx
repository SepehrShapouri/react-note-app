import AddNewNote from "./AddNewNote";
import AllNotes from "./AllNotes";
const NotesSection = () => {
    return ( 
        <section className="notes-section">
        <AddNewNote />
        <AllNotes/>
      </section>
     );
}
 
export default NotesSection;