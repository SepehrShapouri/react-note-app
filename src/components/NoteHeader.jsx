import SortDropDown from "./SortDropDown";

const NoteHeader = () => {
    return ( 
        <header className="app-header">
        <h1 className="header-title">My Notes (1)</h1>
        <SortDropDown/>
      </header>
     );
}
 
export default NoteHeader;