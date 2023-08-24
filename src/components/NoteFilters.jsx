const NoteFilters = ({ allNotes }) => {
  const completed = allNotes.filter((item) => item.completed == true);
  const unCompleted = allNotes.filter((item) => item.completed != true);
  if (!allNotes.length) return <h2>No Notes Added</h2>;
  return (
    <ul className="notes-filter">
      <li className="note-filter-option">
        All <span className="filter-status">{allNotes.length}</span>
      </li>
      <li className="note-filter-option">
        Completed <span className="filter-status">{completed.length}</span>
      </li>
      <li className="note-filter-option">
        Open <span className="filter-status">{unCompleted.length}</span>
      </li>
    </ul>
  );
};

export default NoteFilters;
