import React, {useEffect, useState} from 'react'
import Link from "next/link"

export default function Project(props) {

  useEffect(() => {
  }, [])

  return (
    <div className="c-project">
      <div className="c-project__image-holder">
        <img className="c-project__image" src={props.img} alt=""/>
      </div>
      <div className="c-project__info">
        <h1 className="c-project__title">{props.title}</h1>
        <h2 className="c-date">{`${new Date(props.publishDate).getDay()+1} ${new Date(props.publishDate).toLocaleString('default', { month: 'long' }).toLowerCase()} ${new Date(props.publishDate).getFullYear()}`}</h2>
        <p className="c-project__description">{props.description}</p>
        <Link href={"projects/" +props.link}>
          <p className="c-project__readmore">Read more</p>
        </Link>
      </div>
    </div>
  )
}
