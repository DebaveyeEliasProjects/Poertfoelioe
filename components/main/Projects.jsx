import React, { useEffect, useState } from 'react';
import NavigationButton from '../navigation/NavigationButton';
import Project from './Project';
import Title from './Title';


export default function Projects(props) {
  return (
    <div>
      <div className="c-project__container">
        {

          props.data.map((item, index) => 
            <Project publishDate={item.publishDate} title={item.title} img={item.coverImage} key={index} description={item.description} link={item.link}/>
          )
        }
      </div>
    </div>
  )
}