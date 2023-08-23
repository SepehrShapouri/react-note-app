import { useState } from "react";
const AddNewNote = ({title,description,setTitle,setDescription,clickHandler}) => {
  return (
    <div className="add-new-note">
      <h3 className="new-notes-title">Add New Note</h3>
      <form className="new-note-form">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          name="title"
          className="new-note-input"
          placeholder="note title..."
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          name="description"
          className="new-note-input"
          placeholder="note description..."
        />
      </form>
      <button onClick={(e) => clickHandler(e)} className="add-note-btn">
        Add New Note
      </button>
    </div>
  );
};

export default AddNewNote;
