import AddNewNote from "./AddNewNote";
import AllNotes from "./AllNotes";
const NotesSection = ({title,description,setTitle,setDescription,allNotes,clickHandler,deleteHandler,checkHandler}) => {
    return ( 
        <section className="notes-section">
        <AddNewNote clickHandler={clickHandler} title={title} description={description} setTitle={setTitle} setDescription={setDescription}/>
        <AllNotes deleteHandler={deleteHandler} allNotes={allNotes} checkHandler={checkHandler}/>
      </section>
     );
}
 
export default NotesSection;