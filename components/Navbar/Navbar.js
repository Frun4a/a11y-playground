import React, { Component } from "react";
import styles from "./Navbar.module.css";
import { MenuItems } from "./MenuItems";
import Link from "./Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  setBodyOverflow = () => {
    const body = document.getElementsByTagName("body")[0];
    if (this.state.clicked) {
      body.classList.add(styles.bodyOverflow);
    } else {
      body.classList.remove(styles.bodyOverflow);
    }
  };

  componentDidMount() {
    this.setBodyOverflow();
  }

  componentDidUpdate() {
    this.setBodyOverflow();
  }

  render() {
    return (
      <nav
        className={styles.navbar_items}
        aria-modal={this.state.clicked ? "true" : "false"}
      >
        <h1 className={styles.navbar_logo}>A11y playground</h1>
        <button
          className={styles.menu_icon}
          onClick={this.handleClick}
          aria-label={
            this.state.clicked
              ? "Close Navigation Menu"
              : "Open Navigation Menu"
          }
        >
          <span>
            {this.state.clicked ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </span>
        </button>
        <ul
          className={
            this.state.clicked
              ? `${styles.nav_menu} ${styles.active}`
              : styles.nav_menu
          }
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.url}>
                  <a
                    className={
                      item.cName == "nav_links"
                        ? styles.nav_links
                        : item.cName == "nav_links_mobile"
                        ? styles.nav_links_mobile
                        : null
                    }
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
