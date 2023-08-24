import SortDropDown from "./SortDropDown";

const NoteHeader = ({allNotes,sort,setSort}) => {
    return ( 
        <header className="app-header">
        <h1 className="header-title">My Notes ({allNotes.length})</h1>
        <SortDropDown sort={sort} setSort={setSort}/>
      </header>
     );
}
 
export default NoteHeader;