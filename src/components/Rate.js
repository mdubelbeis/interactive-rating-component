import starSvg from '../images/icon-star.svg';
const Rate = () => {
  return (
    // Svg
    <div className="bg-gradient-to-br from-gradient-black-start to-gradient-black-end p-8 rounded-3xl">
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
        <form className="flex flex-col">
          <div className="flex justify-between items-center text-light-grey mb-6">
            <div className="bg-dark-blue rounded-full py-4 px-6 hover:text-pure-white hover:bg-bright-orange hover:cursor-pointer">
              1
            </div>
            <div className="bg-dark-blue rounded-full py-4 px-6 hover:text-pure-white hover:bg-bright-orange hover:cursor-pointer">
              <span>2</span>
            </div>
            <div className="bg-dark-blue rounded-full py-4 px-6 hover:text-pure-white hover:bg-bright-orange hover:cursor-pointer">
              3
            </div>
            <div className="bg-dark-blue rounded-full py-4 px-6 hover:text-pure-white hover:bg-bright-orange hover:cursor-pointer">
              4
            </div>
            <div className="bg-dark-blue rounded-full py-4 px-6 hover:text-pure-white hover:bg-bright-orange hover:cursor-pointer">
              5
            </div>
          </div>
          <div>
            <button
              className="text-pure-white w-full bg-bright-orange rounded-full py-4 uppercase tracking-wider hover:text-bright-orange hover:bg-pure-white"
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
