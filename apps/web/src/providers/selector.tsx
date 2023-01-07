import React from "react";


export const SelectorContext = React.createContext<any>(null);
export const SelectorConsumer = SelectorContext.Consumer;

type SelectorProviderProps = {
  children: React.ReactChild | React.ReactChild[];
};

export const SelectorProvider = ({ children }: SelectorProviderProps) => {
  return (
    <SelectorContext.Provider
      value={{
        mood: "",
        topic: ""
      }}
    >
      {children}
    </SelectorContext.Provider>
  );
};
