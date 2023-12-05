import { createContext, useContext, useState } from "react";

const SortContext = createContext();

export function SortProvider({ children }) {
  const [sort, setSort] = useState("oldest");
  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {children}
    </SortContext.Provider>
  );
}
export function useSort() {
  const sort = useContext(SortContext);
  return sort;
}
