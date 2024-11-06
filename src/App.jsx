import React from 'react'
import Cursor from './components/Cursor'
import './index.css'
import SwingingDiv from './components/SwingingDiv'
import NoiseBackground from './components/NoiseBackground'
import LeftSocialMedia from './components/LeftSocialMedia'
import ProfileSection from './page/Home'
import RightMail from './components/RightMail'
const App = () => {
  return (
    <div className='h-[100vh] bg-zinc-800'>
      <NoiseBackground />
      <LeftSocialMedia/>
      <RightMail />
      <SwingingDiv/>
      <Cursor/>
<ProfileSection/>

    </div>
  )
}

export default App
