import React from 'react'
import publicidad from '../../video/iphone-publicidad-apple.mp4'
const Video = () => {
  return (
    <div style={{width:'100%'}}>
      <video src={publicidad} autoPlay loop muted style={{width:'100%',height:'400px',objectFit:'cover'}} ></video>
    </div>
  )
}

export default Video