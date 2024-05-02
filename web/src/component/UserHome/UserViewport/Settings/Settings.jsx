import React from 'react'
import EditProfile from './EditProfile'
import DeleteAccount from './DeleteAccount'

const settings = () => {
  return (
    <>
    <div className="settings-container">
        <EditProfile/>
        <DeleteAccount/>
    </div>
    </>
  )
}

export default settings