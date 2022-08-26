import React from 'react'
import One from './One'
import {useState} from 'react'
import {AppContext} from '../AppContext'

function Profile() {
  const [state, setState] = useState(1000)
  return (
    <div style={{backgroundColor: 'pink'}}>
      <AppContext.Provider value={{data: state}}>
      
        <h1>This is Profile</h1>
        <One />

        </AppContext.Provider>
    </div>
  )
}

export default Profile