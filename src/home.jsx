import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      Home <br />

      <Link to={"/booking"}>
        <button style={{padding: "10px", backgroundColor: "green", cursor: "pointer"}}>Book Now</button>
      </Link>
      
    </div>
  )
}

export default Home
