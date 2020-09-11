import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
  <button onClick={handleClick}>{text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const showRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  
  const addVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const mostVoted = () => {
    let maxIndex = points.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    return anecdotes[maxIndex]
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br/>
      <Button handleClick={addVote} text='vote' />
      <Button handleClick={showRandom} text='next anecdote' />
      <br/>
      <h2>Anecdote with most votes</h2>
      {mostVoted()}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)