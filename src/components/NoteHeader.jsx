import SortDropDown from "./SortDropDown";

const NoteHeader = ({allNotes,sortHandler}) => {
    return ( 
        <header className="app-header">
        <h1 className="header-title">My Notes ({allNotes.length})</h1>
        <SortDropDown sortHandler={sortHandler}/>
      </header>
     );
}
 
export default NoteHeader;