import { useState } from 'react';

import Rate from './Rate';
import Thanks from './Thanks';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);
  return (
    <div className="flex">
      {!submitted && <Rate />}
      {submitted && <Thanks />}
    </div>
  );
}

export default App;
