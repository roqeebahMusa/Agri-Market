// import { createContext } from 'react';
// import { useSelector } from 'react-redux';

// export const ThemeContext = createContext();

// export const ThemeProvider=({children})=>{
//     const totalAmount = useSelector((state) => state.commerce.total); 

   
//       return(
//         <ThemeContext.Provider value={{totalAmount}}>
//             {children}
//         </ThemeContext.Provider>
//       )
// }


import { createContext } from 'react';
import { useSelector } from 'react-redux';

export const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
    const totalAmount = useSelector((state) => state.Commerce.total); 
    // const [display, setDisplay] = useState(JSON.parse(localStorage.getItem('state')))

    // const changeTheme = () => {
    //   setDisplay(!display)
    // }

    // useEffect(() => {
    //   localStorage.setItem('state', display);
    // }, [display])

   
      return(
        <ThemeContext.Provider value={{totalAmount}}>
            {children}
        </ThemeContext.Provider>
      )
}