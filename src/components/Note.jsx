import {BsTrash} from "react-icons/bs"
const Note = () => {
    return ( 
        <div className="note">
            <div className="note-header">
            <div className="note-detail">
        <h4 className="note-title">note one</h4>
        <p className="note-description">note one description</p>
        </div>
        <div className="note-functions">
          <span><BsTrash/></span>
          <input className="note-functions-checkbox" type="checkbox" />
        </div>
            </div>
        <p className="note-date">July 21,2023</p>
      </div>
     );
}
 
export default Note;