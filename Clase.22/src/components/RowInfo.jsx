import React from 'react'
/* RAFCE */
const RowInfo = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default RowInfo