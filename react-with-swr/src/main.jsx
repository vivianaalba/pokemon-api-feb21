import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { SWRConfig } from 'swr'
import App from './App.jsx'

// fetcher function defined to handle data fetching using axios
// accepts URLs and additional arguments
// makes an HTTP GET request using axios 
// returns the data from the response.
// function passed as a configuration option to the SWRConfig component 
// specifies how data fetching should be performed
const fetcher = (...args) => axios.get(...args).then((res) => res.data);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />      
    </SWRConfig>
  </React.StrictMode>,
)