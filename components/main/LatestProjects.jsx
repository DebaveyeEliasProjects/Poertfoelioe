import React from 'react'
import fs from "fs"
import NavigationButton from '../navigation/NavigationButton'
import Project from './Project'
import Title from './Title'


export default function LatestProjects() {
  return (
    <div>
      <Title title="Lates Projects"/>
      <div className="c-project__container">
        <Project title="MCT Project One" link="/" img="https://cdn.bandithemepark.net/SP/5.png" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "/>
        <Project title="MCT Project One" link="/" img="https://cdn.bandithemepark.net/SP/5.png" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "/>
        <Project title="MCT Project One" link="/" img="https://cdn.bandithemepark.net/SP/5.png" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "/>
        <Project title="MCT Project One" link="/" img="https://cdn.bandithemepark.net/SP/5.png" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "/>

      </div>
      <div className="c-projects__seemore">
        <NavigationButton link="/projects" fieldName="See al projects"/>
      </div>
    </div>
  )
}

// export const getStaticPaths = async () => {

//   const files = fs.readdirSync('projects');
  
//   const paths = files.map(filename => ({
//     params: {
//       project: filename.replace(".md", "")
//     }
//   }))
//   console.log(files);
//   console.log(paths);

//   return {
//     paths: paths,
//     fallback: false
//   }

// }

export const getStaticProps = async () => {
  const files = fs.readdirSync('projects');
  console.log(files)
  return {
    props: {
      posts: files.map(filename => filename.replace(".md",""))
    }
  }
}
