import Head from 'next/head'
import HomeHeader from '../components/main/HomeHeader'
import LatestProjects from '../components/main/LatestProjects'
import Footer from '../components/navigation/Footer'

import Navigation from '../components/navigation/Navigation'

export default function Home() {
  return (
    <div>
      <div className="c-page__container c-footer__spreader">
        <Navigation/>
        <HomeHeader/>
        <LatestProjects/>
      </div>
      <Footer/>
    </div>
    
  )
}
