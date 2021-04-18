import React from 'react'
import Header from '../../components/main/Header'
import Footer from '../../components/navigation/Footer'
import Navigation from '../../components/navigation/Navigation'

export default function index() {
  return (
    <div>
      <div className="c-page__container c-footer__spreader">
        <Navigation/>
        <div className="c-header__container">
            <Header header="My projects"/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
