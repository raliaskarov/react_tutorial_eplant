// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'; {/* The Provider component from the react-redux library is already imported. This component enables all components in the application to access the Redux store. */}
import { store } from './store.js';  {/* The Redux store is imported from the store.js file. This store holds the application's state, using the reducer defined in the CartSlice.jsx file. */}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App /> {/* The App component is wrapped with the Provider component, with the Redux store passed as a prop. This allows all components in the app to access and interact with the global state managed by Redux. */}
    </Provider>
  </React.StrictMode>,
)
