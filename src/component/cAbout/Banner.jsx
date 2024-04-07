const Banner = () => {
  return (
    <>
      <div>
        <div className=" bg-center bg-cover p-40 w-full h-full bg-[url('../../public/medecin_banner.png')] my-5 md:my-52">
          <div className=" flex flex-col justify-start items-start gap-10">
            <span className=" font-medium text-md text-green-500">
              Le titre
            </span>
            <p className=" font-extrabold text-4xl text-slate-300">
              Lorem ipsum dolor sit amet <br /> consectetur
            </p>
            <div className="">
              <button className=" bg-green-700 rounded-full md:px-4 px-9 md:py-3 py-5 text-lg font-bold text-white">
                Adherer maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
