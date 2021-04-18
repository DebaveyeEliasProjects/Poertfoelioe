import React from 'react'
import Link from "next/link"

export default function NavigationButton(props) {
  return (
    <div className="c-navigation__button">
      <Link href={props.link || "/"}>
        <h3>{props.fieldName}</h3>
      </Link>
    </div>
    
  )
}
