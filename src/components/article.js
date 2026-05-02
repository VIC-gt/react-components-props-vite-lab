import React from 'react';

function Article({ title, date, preview, minutes }) {
  const minutesColor = minutes < 30 ? 'green' : 'red';
  const minutesDisplay = minutes < 30 ? 'lightning' : 'long';

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p><span style={{ color: minutesColor }}>● {minutes} min {minutesDisplay} read</span></p>
    </article>
  );
}

export default Article;