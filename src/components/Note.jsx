import NoteFunctions from "./NoteFunctions";
const Note = ({ title, description, date, id, deleteHandler ,checkHandler,completed}) => {

  return (
    <div className={`note ${completed ? "completed" : ""}`}>
      <div className="note-header">
        <div className="note-detail">
          <h4 className="note-title">{title}</h4>
          <p className="note-description">{description}</p>
        </div>
        <NoteFunctions checkHandler={checkHandler} deleteHandler={deleteHandler} id={id} />
      </div>
      <p className="note-date">{date}</p>
    </div>
  );
};

export default Note;
