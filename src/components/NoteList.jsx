import Note from "./Note";
import NoteFilters from "./NoteFilters";
const NoteList = ({ sort, allNotes, deleteHandler, checkHandler }) => {
  let sortedNotes = allNotes;
  if (sort === "oldest") {
    sortedNotes = [...allNotes].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    console.log(sortedNotes);
  }
  if (sort === "newest") {
    sortedNotes = [...allNotes].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    console.log(sortedNotes);
  }
  if (sort === "completed") {
    sortedNotes = [...allNotes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
    console.log(sortedNotes);
  }
  return (
    <div className="all-notes-section">
      <NoteFilters allNotes={allNotes} />
      <div className="all-notes-list">
        {sortedNotes.map((note) => {
          console.log(new Date(note.date).toISOString())
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
