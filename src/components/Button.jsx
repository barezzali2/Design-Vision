import React from 'react'

function Button({ children, className, expand }) {
  return (
    <button className={className} onClick={expand}>
        {children}
    </button>
  )
}

export default Button