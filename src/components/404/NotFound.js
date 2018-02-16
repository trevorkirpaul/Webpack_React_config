import React from 'react'
import { Link } from 'react-router-dom'
export default () => {
  return (
    <div>
      <h3>Sorry! That page couldn't be found!</h3>
      <p>Click <Link to="/">here</Link> to return home</p>
    </div>
  )
}
