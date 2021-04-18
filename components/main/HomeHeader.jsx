import React from 'react'
import Hashtag from './Hashtag'
import Header from './Header'

export default function HomeHeader() {

  let tags = [
    "React",
    "Agile",
    "Design",
    "Backend",
    "React Native",
    "Databases",
    "Frontend",
    "Python",
    "CSharp",
    
  ]

  return (
    <div className="c-header__container">
      <h1 className="c-header__name">Debaveye Elias</h1>
      <Header header="A student full-stack developer"/>
      <div className="c-header__tags">
        {
          tags.map((tag, index) => (
            <Hashtag key={index} tag={tag}/>
          ))
        }
      </div>
    </div>
  )
}
