const AddNewNote = () => {
    return ( 
        <div className="add-new-note">
        <h3 className="new-notes-title">Add New Note</h3>
        <form className="new-note-form">
          <input type="text" className="new-note-input" placeholder="note title..."/>
          <input type="text" className="new-note-input" placeholder="note description..."/>
          <button className="add-note-btn">Add New Note</button>
        </form>
      </div>
     );
}
 
export default AddNewNote;