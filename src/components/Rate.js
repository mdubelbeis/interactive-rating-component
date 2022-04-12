import { useState, useEffect } from 'react';

import starSvg from '../images/icon-star.svg';
const Rate = ({ setSubmitted, setRating, rating }) => {
  const [selection, setSelection] = useState(0);
  const [background, setBackground] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setRating(selection);
  };

  const onClickRating = (num) => {
    setSelection(num);
    setBackground('bg-light-grey');
  };

  useEffect(() => {}, [background]);

  return (
    // Svg
    <div className="card">
      <div className="bg-dark-blue w-fit p-3 rounded-full mb-8">
        <img className="w-4" src={starSvg} alt="star" />
      </div>
      {/* Text Content */}
      <div className="mb-6">
        <h1 className="text-pure-white text-3xl font-bold leading-6 mb-4">
          How did we do?
        </h1>
        <p className="text-light-grey text-md leading-6">
          Please let us know how we did with your support request. All
          feedback is appreciated to help us improve our offering!
        </p>
      </div>
      {/* Rating Form */}
      <div>
        <form
          className="flex flex-col w-full"
          onSubmit={(e) => onFormSubmit(e)}
        >
          <div className="flex justify-between text-light-grey mb-6">
            <div
              value={selection}
              onClick={() => onClickRating(1)}
              className={`rating-btns ${
                selection === 1 ? background : 'bg-dark-blue'
              } ${
                selection === 1
                  ? 'text-pure-white'
                  : 'text-light-grey'
              }`}
            >
              1
            </div>
            <div
              onClick={() => onClickRating(2)}
              value={selection}
              className={`rating-btns ${
                selection === 2 ? background : 'bg-dark-blue'
              } ${
                selection === 2
                  ? 'text-pure-white'
                  : 'text-light-grey'
              }`}
            >
              2
            </div>
            <div
              onClick={() => onClickRating(3)}
              value={selection}
              className={`rating-btns ${
                selection === 3 ? background : 'bg-dark-blue'
              } ${
                selection === 3
                  ? 'text-pure-white'
                  : 'text-light-grey'
              }`}
            >
              3
            </div>
            <div
              onClick={() => onClickRating(4)}
              value={selection}
              className={`rating-btns ${
                selection === 4 ? background : 'bg-dark-blue'
              } ${
                selection === 4
                  ? 'text-pure-white'
                  : 'text-light-grey'
              }`}
            >
              4
            </div>
            <div
              onClick={() => onClickRating(5)}
              value={selection}
              className={`rating-btns ${
                selection === 5 ? background : 'bg-dark-blue'
              } ${
                selection === 5
                  ? 'text-pure-white'
                  : 'text-light-grey'
              }`}
            >
              5
            </div>
          </div>
          <div>
            <button
              className="w-full text-pure-white bg-bright-orange rounded-full h-12 uppercase tracking-wider hover:text-bright-orange hover:bg-pure-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rate;
