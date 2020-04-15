import React, {useState} from 'react';
import App from './App';

// This defines the component thru which the user provides input, an HTML-style field with a submit button.
function UserInput({faveColour}) {

  // userInput defines the shit the user types in;
  const [userInput, setUserInput] = useState("");

  const color = () =>  {
    setUserInput(userInput);
  };

  return (
    <div>
      <h2>{userInput}</h2>
      <h3>
        <input
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Type your favourite colour:"
          type="text"
          name="userInput"
          required
        />
        <button type="submit" className="submitButton" onClick={setUserInput}>Submit your response.</button>
      </h3>
    </div>
  );
}

export default UserInput;