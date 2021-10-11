import React from 'react'
import './contact_me.css'
import { navLinks } from '../../helpers/navigation'

function createLinks() {
  return navLinks.map((e, idx) => (
    <p key={idx}><a href={e.ref}>{e.name}</a></p>
  ))
}

function ContactMe() {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
          <p>Jon Maximilian Simpson</p>
          <p>Max.simpson@gmail.com</p>
        </div>
        <div>
          {createLinks()}
        </div>
      </div>
      <div style={{ textAlign:'center'}}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe
