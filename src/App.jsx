import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NotesSection from "./components/NotesSection";
import AppProvider from "./providers/AppProvider";
const App = () => {
  return (
    <AppProvider>
      <div className="wrapper">
        <div className="app">
          <NoteHeader />
          <NotesSection />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
