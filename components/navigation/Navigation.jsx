import React, {useState, useEffect} from 'react'
import Logo from '../assets/Logo'
import Link from "next/link"
import NavigationButton from './NavigationButton'
import NavigationLink from './NavigationLink'
import MobileMenuIcon from './MobileMenuIcon'

export default function Navigation() {

  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    if(window.innerWidth <= 800){
      setMobile(true);
    }
    else{
      setMobile(false)
    }
  }

  useEffect(() => {
    handleMobile();
    window.addEventListener("resize", () => {
      handleMobile()
    })
  }, [])

  return (
    <div className="c-navigation__container">  
      <Logo/>
      {
        mobile ?
        (
          <div className="c-navigation__links">
            <MobileMenuIcon/>
          </div>
        )
        :
        (
          <div className="c-navigation__links">
              <NavigationLink link="/" fieldName="Home"/>
              <NavigationLink link="/projects" fieldName="Projects"/>
              <NavigationLink link="/about" fieldName="About"/>
              <NavigationButton link="/contact" fieldName="Contact"/>
            </div>
          
        )
      }
    </div>
  )
}
