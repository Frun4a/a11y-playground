import React, { Component } from 'react'
import styles from './Navbar.module.css'
import { MenuItems } from './MenuItems'
import { Button } from '../Button.js'
import Link from './Link'
import { useRouter } from "next/router"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clicked: false
     }
  }



  handleClick = () => {
    this.setState( {clicked: !this.state.clicked} )
  }

  render() {
    return (
      <nav className={styles.navbar_items}>
        <h1 className={styles.navbar_logo}>A11y playground</h1>
        <button className={styles.menu_icon} onClick={this.handleClick}>
          <span>{this.state.clicked ? (<FontAwesomeIcon icon={faTimes} />)
            : (<FontAwesomeIcon icon={faBars} />)}
          </span>
        </button>
        <ul className={this.state.clicked ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.url}>
                  <a 
                    className={item.cName == 'nav_links' ? styles.nav_links
                    : item.cName == 'nav_links_mobile' ? styles.nav_links_mobile
                    : null}
                  >
                    {item.title}
                  </a>
                </Link>

              </li>
            )
          })}
        </ul>
        <Button id="su_button">Sign Up</Button>
      </nav>
    )
  }
}

export default Navbar