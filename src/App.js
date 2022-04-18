import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (  
<button onClick={handleClick}>    {text}  </button>)

const StatisticsLine = ({text, value}) => {
  return (
    <tbody>
      <tr>
    <td>{text}</td> 
    <td>{value}</td>
    </tr>
      </tbody>
  )
}
const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return (
      
     <p>No feedback given</p>
      
    )
  }
  else {
    return (
<div>
      <h2>Statistics</h2>
      <table>
        
      <StatisticsLine text={"Good"} value={good}/>
      <StatisticsLine text={"Neutral"} value={neutral}/>
      <StatisticsLine text={"Bad"} value={bad}/>
      <StatisticsLine text={"All"} value={bad + good + neutral}/>
      <StatisticsLine text={"Average"} value={(good - bad) / (bad + good + neutral)}/> 
      <StatisticsLine text={"Positive"} value={good / (good + bad + neutral) * 100 + "%"}/>
      
      </table>
  </div>
    )
}
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad' />
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

export default App
