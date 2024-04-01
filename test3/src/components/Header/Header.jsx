import React from 'react'
import Hcss from './Header.module.css'
function Header() {
  return (
    <header>
        <nav>
        <ul>
    <li><a href='#'>Live</a></li>
    <li><a href='#'>Push</a></li>
    <li><a href='#'>Note</a></li>
    <li><a href='#'>Link</a></li>
    <li><a href='#'>Shop</a></li>
    <li><a href='#'>Packs</a></li>
    <li><a href='#'>Help</a></li>
    <li><a id={Hcss.more} href='#'>More +</a></li>
        </ul>
        </nav>
    </header>
   )

}

export default Header
