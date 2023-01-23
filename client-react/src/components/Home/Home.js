import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-content">
        <section className="menu">
          <div className="container-to-fl">
          <button className="options">PLAY</button>
          <button className="options">Settings</button>
          <button className="options">Rules</button></div>
        </section>
      </div>
    </div>
  )
}

export default Home
