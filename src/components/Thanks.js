import thanksSvg from '../images/illustration-thank-you.svg';

const Thanks = ({ rating }) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-gradient-black-start to-gradient-black-end p-8 rounded-3xl w-80 sm:w-96 space-y-4">
      <div className="w-fit mb-4">
        <img src={thanksSvg} alt="thank you" />
      </div>
      <div>
        <p className="text-bright-orange py-2 px-3 rounded-full w-max bg-dark-blue text-center">
          You selected {rating} out of 5
        </p>
      </div>
      <div>
        <h2 className="text-2xl text-pure-white mt-4">Thank you!</h2>
      </div>
      <div>
        <p className="text-light-grey text-center">
          We appreciate you taking the time to give a rating. If you
          ever need more support, don't hesitate to get in touch
        </p>
      </div>
    </div>
  );
};

export default Thanks;
