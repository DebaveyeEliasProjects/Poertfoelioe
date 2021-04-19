import Head from 'next/head'
import React, {useState, useEffect} from "react"
import HomeHeader from '../components/main/HomeHeader'
import LatestProjects from '../components/main/LatestProjects'
import Footer from '../components/navigation/Footer'

import Navigation from '../components/navigation/Navigation'
import { getProjectData, getFourProjects } from '../lib/api';

export default function Home({projects}) {


  return (
    <div>
      <div className="c-page__container c-footer__spreader">
        <Navigation/>
        <HomeHeader/>
        <LatestProjects data={projects}/>
      </div>
      <Footer/>
    </div>
    
  )
}

export const getStaticProps = async () => {
  let data = await getFourProjects();
  return {
    props: {
      projects: data
    }
  }
}
