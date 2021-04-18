import React from 'react'
import DarkLogo from '../assets/DarkLogo'
import DarkNavigationLink from './DarkNavigationLink'

export default function Footer() {
  return (
    <div className="c-footer">
      <div className="c-page__container c-footer__container">
        <div>
          <DarkLogo/>  
        </div>
        <div className="c-footer__links">
          <DarkNavigationLink link="/" fieldName="Home"/>
          <DarkNavigationLink link="/projects" fieldName="Projects"/>
          <DarkNavigationLink link="/about" fieldName="About"/>
          <DarkNavigationLink link="/Contact" fieldName="Contact"/>
        </div>
        
      </div>
    </div>
  )
}
