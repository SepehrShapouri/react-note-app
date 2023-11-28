export default function myReducer(state, action) {
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
