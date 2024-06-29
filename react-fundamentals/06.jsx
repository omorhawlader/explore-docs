// Basic Forms

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  function handleSubmit(e){
    e.preventDefault()
    onSubmitUsername(e.target.userInput.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" id='userInput' />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
