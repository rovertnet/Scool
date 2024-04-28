

const SolutionBanner = () => {

  return (
    <>
      <div>
        <div className=" bg-center bg-no-repeat bg-[url('../../public/fond.jpg')] bg-gray-700 bg-blend-multiply mt-10 py-20 px-10 md:mt-52 md:px-10 md:py-20">
          <div className=" flex flex-col justify-center items-center gap-10 py-7 md:py-5">
            <div className="text-start ">
              <span className=" md:py-4 py-3 font-medium text-md text-green-500 md:text-center text-center">
                Accueil / Solutions
              </span>
              <p className=" md:py-4 py-3 font-extrabold text-4xl md:text-center text-center text-slate-300">
                Nos Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default SolutionBanner;