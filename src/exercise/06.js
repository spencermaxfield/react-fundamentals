// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInput = React.useRef(null);
  const submitButton = React.useRef(null);

  const [input, setInput] = React.useState(null);

  function handleSubmit(event) {
      event.preventDefault();
      const input = usernameInput.current.value;
      onSubmitUsername(input)
  }

  function handleChange(event) {
      const value = event.target.value;
      setInput(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
          <input value={input} onChange={handleChange} ref={usernameInput} id='username' name='username' type="text" />
      </div>
      <button ref={submitButton} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
