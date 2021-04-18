import React from 'react'
import Link from "next/link"

export default function NavigationLink(props) {
  return (
    <div className="c-navigation__link">
      <Link href={props.link || "/"} >
        <h3>{props.fieldName}</h3>
      </Link>
    </div>
  )
}
