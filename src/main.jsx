import { initializeApp } from 'firebase/app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { firebaseConection } from './firebase'
import './index.css'

firebaseConection()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
