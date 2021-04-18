import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Hashtag(props) {
  const [tag, setTag] = useState("")

  useEffect(() => {
    setTag(`#${props.tag}`)
  }, [])

  return (
    <p className="c-hashtag">{tag}</p>
  )
}
