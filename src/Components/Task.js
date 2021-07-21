import React from 'react'
import '../App.css'


export default function Task({taskName, timeName}) {
  return (
    <div className='task'>
      <h2 >Task</h2>
      <h1>{taskName}</h1>
      <h2 id='taskHead2'>Time to Complete</h2>
      <h1>{timeName}</h1>
    </div>
  )
}
