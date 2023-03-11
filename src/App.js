
import JSConfetti from 'js-confetti'
import { useState } from 'react';
import Results from './results';

import './App.css';



function App() {
  const [showComponent, setShowComponent] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  function showing() {

    const jsConfetti = new JSConfetti()
    
    jsConfetti.addConfetti({
      emojis: ['✨'],
      
      emojiSize: 50,
      confettiNumber: 100,
    })
    
    setShowComponent(true);
    setButtonClicked(true);
    }
  return (
    <div className="App">
       {!buttonClicked && <button onClick={showing}>Click me</button>}
      {showComponent && <Results />}
    </div>
  );
}

export default App;

