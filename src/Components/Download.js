import React from 'react'

export default function Download({downloadLink}) {
  return (
    <>   
      <h2 style={{textAlign:'center' , marginTop:'80px'}}>Download Processed Video</h2>
      <div style={{display:'flex' , justifyContent:'center' ,  alignItems:'center'}} >
        {downloadLink && (
          <a href={downloadLink} download="output.mp4">
            <button style={{marginTop:'20px', marginBottom:'50px', backgroundColor:'black' , color:'white'}}>Download Video</button>
          </a>
        )}
      </div>
    </>
  )
}
