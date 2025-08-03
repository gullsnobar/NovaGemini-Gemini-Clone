import React, { useEffect } from "react";
import runChat from "../config/gemini.js"; // ✅ adjust path if needed
import Context from "./Context.js";        // ✅ separated createContext

const ContextProvider = ({ children }) => {
  const onSent = async (prompt) => {
    try {
      await runChat(prompt);
    } catch (err) {
      console.error("Error in onSent:", err);
    }
  };

  useEffect(() => {
    onSent("What is React JS?");
  }, []);

  // ✅ Provide a valid value
  const contextValue = {
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
