const NoteFilters = () => {
    return ( 
        <ul className="notes-filter">
        <li className="note-filter-option">All <span className="filter-status">1</span></li>
        <li className="note-filter-option">Completed <span className="filter-status">1</span></li>
        <li className="note-filter-option">Open <span className="filter-status">1</span></li>
      </ul>
     );
}
 
export default NoteFilters;