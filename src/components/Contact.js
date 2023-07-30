import React from 'react'

export default function Contact(props) {
  return (
    <div className='conatiner'>
        <div className='container-1'>
            <h1 className={`text-${props.mode==='light' ? 'dark':'black'}`}>Contact Us</h1>
        </div>
        <div className='Mobile-2'>
            <a href="Phone:7898287713" >Call @Sandy</a>
        </div>
    </div>
  )
}
