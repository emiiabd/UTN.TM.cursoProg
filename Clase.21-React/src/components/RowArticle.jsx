import React from 'react'

const RowArticle = (props) => {
  console.log(props)
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <span>{props.auth}</span>
      </div>
      <span>{props.date}</span>
    </div>
  )
}

export default RowArticle
