import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

const Named = ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} ${styles.selected_link}`
  }

  return (
    <Link
      href={href}
     >
       {React.cloneElement(children, { className })}
    </Link>
  )
}

export default Named