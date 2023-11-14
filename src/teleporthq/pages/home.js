import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>easy_widget</title>
        <meta property="og:title" content="easy_widget" />
      </Helmet>
    </div>
  )
}

export default Home
