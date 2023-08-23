import Note from "./Note";
import NoteFilters from "./NoteFilters";
const NoteList = ({ allNotes, deleteHandler ,checkHandler}) => {
  return (
    <div className="all-notes-section">
      <NoteFilters allNotes={allNotes} />
      <div className="all-notes-list">
        {allNotes.map((note) => {
          return (
            <Note
            note={note}
              deleteHandler={deleteHandler}
              key={note.id}
              checkHandler={checkHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NoteList;
