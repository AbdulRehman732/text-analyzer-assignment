import { useState } from 'react';
import './App.css';
import { countWords, countVowels, isPalindrome, reverseWords, truncateString } from './utils/textUtils';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="container">
      <h1>Text Analyzer</h1>
      <textarea 
        placeholder="Enter text to analyze..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
      />
      
      <div className="results">
        <div className="result-card">
          <h3>Word Count</h3>
          <p>{countWords(text)}</p>
        </div>
        <div className="result-card">
          <h3>Vowel Count</h3>
          <p>{countVowels(text)}</p>
        </div>
        <div className="result-card">
          <h3>Palindrome?</h3>
          <p>{isPalindrome(text) ? 'Yes' : 'No'}</p>
        </div>
        <div className="result-card">
          <h3>Reversed Words</h3>
          <p>{truncateString(reverseWords(text), 50)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
