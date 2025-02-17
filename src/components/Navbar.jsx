import React from 'react'
import Logo from './Logo'
import MenuLinks from './MenuLinks'
import Styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <section id={Styles.navBlock}>
        <article>
            <Logo/>
            <MenuLinks/>
        </article>
    </section>
  )
}

export default Navbar