import Note from "./Note";
import NoteFilters from "./NoteFilters";
const AllNotes = () => {
    return ( 
        <div className="all-notes-section">
        <NoteFilters />
        <div className="all-notes-list">
          <Note />
        </div>
      </div>
     );
}
 
export default AllNotes;