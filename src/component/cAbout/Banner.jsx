const Banner = () => {
  return (
    <>
      <div>
        <div className=" md:bg-cover bg-cover bg-center md:p-36 p-36 w-full h-full bg-[url('../../public/123.jpg')] mt-5 md:mt-52">
          <div className=" flex flex-col justify-start items-start gap-10">
            <div>
              <span className=" font-medium text-md text-green-500">
                M U S D E E L
              </span>
              <p className=" font-extrabold text-4xl text-slate-300">
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
