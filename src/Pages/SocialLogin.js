import React from 'react'
import { MdFacebook } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
export default function () {
  return (
    <>
        <div className='continue'> 
        <span style={{color:'#969696', marginRight:'0.5em', letterSpacing:'-0.2em' }}>--------------------------</span> 
        <span> or continue with </span>
        <span style={{color:'#969696', marginLeft:'0.5em', letterSpacing:'-0.2em'}}>--------------------------</span>
      </div>
      <div className='social'>
        <div className='facebook'><MdFacebook color='#003cff' size='25'/> Facebook</div>
        <div className='facebook'> <FcGoogle size='25'/> Google</div>
      </div>
    </>
  )
}
