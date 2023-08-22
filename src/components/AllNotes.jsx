import Note from "./Note";
import NoteFilters from "./NoteFilters";
const AllNotes = ({ allNotes, deleteHandler ,checkHandler}) => {
  return (
    <div className="all-notes-section">
      <NoteFilters allNotes={allNotes} />
      <div className="all-notes-list">
        {allNotes.map((note) => {
          return (
            <Note
              deleteHandler={deleteHandler}
              key={note.id}
              title={note.title}
              description={note.description}
              date={note.date}
              id={note.id}
              checkHandler={checkHandler}
              completed={note.completed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllNotes;
