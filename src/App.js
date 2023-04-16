import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import About from './components/About'
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'
import VotingMadeEasy from './components/VotingMadeEasy'
import Activities from './components/Activities'
import Signup from './components/Signup'
import Knowyourparty from './components/Knowyourparty'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      {/* <Navbar />
      <Carousel />
      <Footer /> */}
      <Router>
        <Navbar />
        {/* <Carousel /> */}
        <div>
          <Routes>
            <Route exact path="/" element={<Carousel />}>
            </Route>
            <Route exact path="/aboutus" element={<About />}>
            </Route>
            <Route exact path="/votingmadesimple" element={<VotingMadeEasy />}>
            </Route>
            <Route exact path="/knowyourparty" element={<Knowyourparty />}>
            </Route>
            <Route exact path="/activities" element={<Activities />}>
            </Route>
            <Route exact path="/leaderboard" element={<Leaderboard />}>
            </Route>
            <Route exact path="/login" element={<Login />}>
            </Route>
            <Route exact path="/signup" element={<Signup />}>
            </Route>
            <Route exact path="/profile" element={<Profile />}>
            </Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App

