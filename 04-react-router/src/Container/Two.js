import React, {useContext} from 'react'
import {AppContext} from '../AppContext'

function Two() {
    const {data} = useContext(AppContext)
  return (
    <div style={{backgroundColor: 'red', width: '200px'}}>
        <h1>Layer Two {data}</h1>
    </div>
  )
}

export default Two