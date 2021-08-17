import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

const Named = ({ href, children }) => {
  const router = useRouter()

  let ariaCurrent = null
  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} ${styles.selected_link}`
    ariaCurrent = 'page'
  }

  return (
    <Link
      href={href}
     >
       {React.cloneElement(children, { className, 'aria-current': ariaCurrent })}
    </Link>
  )
}

export default Named;