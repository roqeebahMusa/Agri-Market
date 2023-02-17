import { createContext } from 'react';
import { useSelector } from 'react-redux';

export const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
    const totalAmount = useSelector((state) => state.commerce.total); 

   
      return(
        <ThemeContext.Provider value={{totalAmount}}>
            {children}
        </ThemeContext.Provider>
      )
}