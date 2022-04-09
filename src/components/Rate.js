import { useState } from 'react';

import starSvg from '../images/icon-star.svg';
const Rate = ({ setSubmitted, setRating }) => {
  const [selection, setSelection] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();

    setRating(selection);
    setSubmitted(true);
  };

  return (
    // Svg
    <div className="flex flex-col bg-gradient-to-br from-gradient-black-start to-gradient-black-end p-8 rounded-3xl w-80 sm:w-96">
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
            <span
              value={selection}
              onClick={(e) => setSelection(1)}
              className="rating-btns"
            >
              1
            </span>
            <span
              onClick={(e) => setSelection(2)}
              value={selection}
              className="rating-btns"
            >
              2
            </span>
            <span
              onClick={(e) => setSelection(3)}
              value={selection}
              className="rating-btns"
            >
              3
            </span>
            <span
              onClick={(e) => setSelection(4)}
              value={selection}
              className="rating-btns"
            >
              4
            </span>
            <span
              onClick={(e) => setSelection(5)}
              value={selection}
              className="rating-btns"
            >
              5
            </span>
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
