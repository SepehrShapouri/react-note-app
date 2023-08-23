import NoteFunctions from "./NoteFunctions";
const Note = ({ note, deleteHandler, checkHandler }) => {
  return (
    <div className={`note ${note.completed ? "completed" : ""}`}>
      <div className="note-header">
        <div className="note-detail">
          <h4 className="note-title">{note.title}</h4>
          <p className="note-description">{note.description}</p>
        </div>
        <NoteFunctions
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
          id={note.id}
        />
      </div>
      <p className="note-date">{note.date}</p>
    </div>
  );
};

export default Note;
