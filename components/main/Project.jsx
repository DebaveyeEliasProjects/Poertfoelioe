import React, {useEffect, useState} from 'react'
import Link from "next/link"

export default function Project(props) {
  const [link, setLink] = useState("/")

  useEffect(() => {
    let name = props.title
    let x = name.split(" ").join("-")
    console.log(x);
    setLink(`/${x}`)
  }, [])

  return (
    <div className="c-project">
      <div className="c-project__image-holder">
        <img className="c-project__image" src={props.img} alt=""/>
      </div>
      <div className="c-project__info">
        <h1 className="c-project__title">{props.title}</h1>
        <p className="c-project__description">{props.description}</p>
        <Link href={link}>
          <p className="c-project__readmore">Read more</p>
        </Link>
      </div>
    </div>
  )
}
