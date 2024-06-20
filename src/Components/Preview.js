import React from 'react'
import { flushSync } from 'react-dom'

export default function Preview({ videoSrc, musicSrc }) {
  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop:'80px' }}>Preview Files</h2>
      <div style={{display : 'flex' , justifyContent:'center' , alignItems:'center' , padding:'20px'}}>
        {videoSrc && (
          <div>
            <h3>Video Preview</h3>
            <video src={videoSrc} controls width="200" />
          </div>
        )}
        {musicSrc && (
          <div style={{marginLeft:'40px'}}>
            <h3>Music Preview</h3>
            <audio src={musicSrc} controls />
          </div>
        )}
      </div>
    </>
  )
}
