import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss'

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-content">
        <section className="menu">
          <div className="container-to-fl">
          <button className="options"><Link  to="/game" className="link-home">PLAY</Link></button>
          <button className="options"><Link  to="/settings" className="link-home">Settings</Link></button>
          <button className="options"><Link  to="/rules" className="link-home">Rules</Link></button></div>
        </section>
      </div>
    </div>
  )
}

export default Home
