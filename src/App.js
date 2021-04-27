import React, { useState } from 'react';
import data from './data';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let paraAmount = parseInt(count);
    if (count <= 0) {
      paraAmount = 1;
    }
    if (count > 8) {
      paraAmount = 8;
    }
    setText(data.slice(0, paraAmount));
  }
  return (
    <section className='section-center'>
      <h3>tired of boring lorem epsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App;
