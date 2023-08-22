import AddNewNote from "./AddNewNote";
import AllNotes from "./AllNotes";
const NotesSection = ({allNotes,changeHandler,clickHandler,deleteHandler,checkHandler}) => {
    return ( 
        <section className="notes-section">
        <AddNewNote clickHandler={clickHandler}
          changeHandler={changeHandler}/>
        <AllNotes deleteHandler={deleteHandler} allNotes={allNotes} checkHandler={checkHandler}/>
      </section>
     );
}
 
export default NotesSection;