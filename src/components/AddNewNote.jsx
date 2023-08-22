import { useState } from "react";
const AddNewNote = ({ changeHandler, clickHandler }) => {
  return (
    <div className="add-new-note">
      <h3 className="new-notes-title">Add New Note</h3>
      <form className="new-note-form">
        <input
          onChange={(e) => changeHandler(e)}
          type="text"
          name="title"
          className="new-note-input"
          placeholder="note title..."
        />
        <input
          onChange={(e) => changeHandler(e)}
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
