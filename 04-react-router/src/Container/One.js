import React from 'react'
import Two from './Two'

function One() {
  return (
    <div style={{backgroundColor: 'blue', width:'500px'}}>
        <h1>Layer One</h1>
        <Two></Two>
    </div>
  )
}

export default One