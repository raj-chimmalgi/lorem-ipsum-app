import { useState } from "react";
import data from "./data.js";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="paragraphs">Paragraphs</label>
        <input
          className="form-input"
          type="number"
          id="paragraphs"
          value={count}
          min="1"
          max="8"
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((p) => (
          <p key={nanoid()}>{p}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
