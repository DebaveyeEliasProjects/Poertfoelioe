import React from 'react'
import Header from '../../components/main/Header'
import Projects from '../../components/main/Projects'
import Footer from '../../components/navigation/Footer'
import Navigation from '../../components/navigation/Navigation'
import { getProjectData } from '../../lib/api'

export default function index({projects}) {
  return (
    <div>
      <div className="c-page__container c-footer__spreader">
        <Navigation/>
        <div className="c-header__container">
            <Header header="My projects"/>
        </div>
        <Projects data={projects}/>
      </div>
      <Footer/>
    </div>
  )
}


export const getStaticProps = async () => {
  let data = await getProjectData();
  return {
    props: {
      projects: data
    }
  }
}