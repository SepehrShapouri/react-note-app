import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
const NotesSection = ({onAddNote,allNotes,deleteHandler,checkHandler,sort}) => {
    return ( 
        <section className="notes-section">
        <AddNewNote onAddNote={onAddNote}/>
        <NoteList sort={sort} deleteHandler={deleteHandler} allNotes={allNotes} checkHandler={checkHandler}/>
      </section>
     );
}
 
export default NotesSection;