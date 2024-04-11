const Banner = () => {
  return (
    <>
      <div>
        <div className=" bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply mt-10 py-20 px-10 md:mt-40 md:px-10 md:py-20">
          <div className=" flex flex-col justify-center items-center gap-10">
            <div className="text-center">
              <span className=" md:py-4 py-3 font-medium text-md text-green-500 md:text-center text-center">
                M U S D E E L
              </span>
              <p className=" md:py-4 py-3 font-extrabold text-4xl md:text-center text-center text-slate-300">
                Retrouvons la santé <br /> ensemble
              </p>
              <div className="md:pt-3 pt-4">
                <button className=" bg-green-700 rounded-full md:px-9 px-24 md:py-3 py-3 md:text-xl text-base font-bold text-white">
                  Adherer maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
