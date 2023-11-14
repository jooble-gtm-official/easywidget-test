import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './teleporthq/style.css'

const App = () => {
  return (
    <Router/>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
