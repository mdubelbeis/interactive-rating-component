import { useState } from 'react';

import Rate from './Rate';
import Thanks from './Thanks';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      {!submitted && <Rate />}
      {submitted && <Thanks />}
      <footer className="absolute bottom-0 left-0 w-full text-center p-6 bg-bright-orange">
        <div>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
        </div>
        <div className="text-pure-white">
          Coded by{' '}
          <a
            href="https://github.com/mdubelbeis/interactive-rating-component"
            target="_blank"
          >
            Mason J. Dubelbeis
          </a>
          .
        </div>
      </footer>
    </div>
  );
}

export default App;
