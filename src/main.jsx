import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from "./Redux/store"
import { Provider } from 'react-redux'
import { ThemeProvider } from './Components/API/Context';
// import { store } from './App/store'
// import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
     <Provider store={store}>
    <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)