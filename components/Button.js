import React from 'react'

const STYLES = [
  'btn--primary',
  'btn--outline'
]

const SIZES = [
  'btn--medium',
  'btn--large'
]



export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  id
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} id={id}>
      {children}
      <style jsx>{`
        @media screen and (max-width:960px) {
          #su_button {
            display: none;
          }
        }
      `}</style>
    </button>
    
  )
}


