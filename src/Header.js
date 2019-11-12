import React, { useState } from "react";
import logo from "./logo.svg"

function Header() {

  return (
    <header>
      <h1>Nick La Chance's First React Project</h1>
        <img src={logo} alt="Random picsum"/>
    </header>
  )
}

export default Header
