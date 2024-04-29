import { FaArrowRight } from "react-icons/fa6";

const CardSolution = () => {
  return (
    <>
      <div className="mt-10 md:mt-10 md:mb-14 mb-12 px-10 md:px-12 md:py-10 py-10 block">
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-5">
          <div className=" bg-white shadow-md border-[1px] border-slate-400 rounded-lg overflow-hidden">
            <img
              src="../../public/1.png"
              alt=""
              className=" w-full h-36 md:h-96 object-cover"
            />
            <div className=" text- p-5 w-full">
              <h3 className="text-2xl md:text-2xl mb-3 md:mb-4 font-bold">
                Prestation 1
              </h3>
              <p className=" flex flex-wrap gap-2 flex-row items-center justify-start text-lg md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat...
              </p>
              <p className="flex space-x-5  ">
                <span className="text-lg text-green-700">Learn more </span>
                <FaArrowRight className=" text-lg md:text-lg text-green-700" />{" "}
              </p>
            </div>
          </div>

          <div className=" bg-white shadow-md border-[1px] border-slate-400 rounded-lg overflow-hidden">
            <img
              src="../../public/2.png"
              alt=""
              className=" w-full h-36 md:h-96 object-cover"
            />
            <div className=" text- p-5 w-full">
              <h3 className="text-2xl md:text-2xl mb-3 md:mb-4 font-bold">
                Prestation 1
              </h3>
              <p className=" flex flex-wrap gap-2 flex-row items-center justify-start text-lg md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat...
              </p>
              <p className="flex space-x-5 text-green-700">
                Learn more{" "}
                <FaArrowRight className=" text-lg md:text-lg text-green-700" />{" "}
              </p>
            </div>
          </div>

          <div className=" bg-white shadow-md border-[1px] border-slate-400 rounded-lg overflow-hidden">
            <img
              src="../../public/3.png"
              alt=""
              className=" w-full h-36 md:h-96 object-cover"
            />
            <div className=" text- p-5 w-full">
              <h3 className="text-2xl md:text-2xl mb-3 md:mb-4 font-bold">
                Prestation 1
              </h3>
              <p className=" flex flex-wrap gap-2 flex-row items-center justify-start text-lg md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat...
              </p>
              <p className="flex space-x-5 text-green-700">
                Learn more{" "}
                <FaArrowRight className=" text-lg md:text-lg text-green-700" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSolution;
