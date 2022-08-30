import React from 'react'
import DemoLogin from './DemoLogin'
import DemoSignup from './DemoSignup'
import './w.css'
const WhatsAppLogin = () => {
  return (
    <div>
       <div className='greenbox'>
        <div>
            <img src="https://th.bing.com/th/id/R.35ffa6e353468280a59e5b4672b8aba0?rik=7hSGUWDIrp%2bhLg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fWhatsApp-PNG-Picture.png&ehk=deet7YvWTlFf4Xe0LZBhIsS4NJ84GeEnFqKz44GkR%2bo%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <h4>WHATSAPP WEB</h4>
        </div>
       </div>
       <div className='whitebox'>
           <h2 style={{color:"gray", fontWeight:'300'}}>To Use WhatsApp On Your Device Please Register</h2>
           <DemoSignup/>
       </div>

    </div>
  )
}

export default WhatsAppLogin