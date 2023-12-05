import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext();
const NotesDispatchContext = createContext();
function notesReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.newNote];
    }
    case "delete": {
      return state.filter((n) => n.id != action.id);
    }
    case "check": {
      return state.map((note) =>
        note.id == action.id ? { ...note, completed: !note.completed } : note
      );
    }
  }
}
export function NotesProvider({ children }) {
  const [allNotes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={allNotes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}
export function useNotes() {
  const allNotes = useContext(NotesContext);
  return allNotes;
}
export function useNotesDispatch() {
  const dispatch = useContext(NotesDispatchContext);
  return dispatch;
}
