import React from 'react'

export const Contact = ({icon, data}:{[key:string]:string}) => {
  return (
    <li>
    <span className="icon">
      <i className={`fa fa-${icon}`} aria-hidden="true"></i>
    </span>
    <span className="text">{data}</span>
  </li>
  )
}
