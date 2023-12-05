import React from "react";
import { NotesProvider } from "../context/NotesContext";
import { SortProvider } from "../context/SortContext";

function AppProvider({ children }) {
  return (
    <NotesProvider>
      <SortProvider>{children}</SortProvider>
    </NotesProvider>
  );
}

export default AppProvider;
