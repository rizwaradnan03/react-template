import React from 'react'
import { Link } from 'react-router-dom'

export const SubmitButton = (props) => {
  return (
    <>
        <button type={props.type} className={`btn btn-${props.color} ${props.class}`}>{props.children}</button>
    </>
  )
}

export const LinkButton = (props) => {
  return (
    <>
        <Link to={props.path} className={`btn btn-${props.color} ${props.class}`}>{props.children}</Link>
    </>
  )
}
