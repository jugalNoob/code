import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

<h1>jugal sharma</h1>
<Link to="dapp">dapp</Link>
<Link to="/">home</Link>
<Link to="form">form</Link>
<Link to="login">login</Link>
    </div>
  )
}

export default Home