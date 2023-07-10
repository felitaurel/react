import React from 'react'
import * as materialize from "materialize-css"
import sneakers from "./sneakers.png"
function NavbarComponent() {
  return (
  <nav>
    <div className="nav-wrapper blue darken-4">
      <a href="#" className="brand-logo left"><img src={sneakers} /></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Urbano</a></li>
        <li><a href="#">Training</a></li>
        <li><a href="#">Accesorios</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default NavbarComponent