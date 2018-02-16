import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.sass'

// attach <App /> to anchor point in HTML file
const wrapper = document.getElementById("container")
wrapper && ReactDOM.render(<App />, wrapper)
