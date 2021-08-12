import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  
  const toggleState = () => {
    sharedState.ariaHidden = sharedState.ariaHidden === 'true' ? 'false' : 'true';
  }

  let sharedState = {
    ariaHidden: 'true',
    toggleAriaHidden: toggleState,
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}