import { FaArrowRight } from "react-icons/fa6";

const CardSolution = () => {
  return (
    <>
      <div className="mt-20 md:mt-20 md:mb-14 mb-12 px-10 md:px-12 md:py-20 py-10 block">
        <div className=" md:mx-8 mx-6 grid grid-cols-2 md:grid-cols-3 gap-5">
          <div className=" bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden">
            <img
              src="../../public/1.png"
              alt=""
              className=" w-full h-36 md:h-72 object-cover"
            />
            <div className=" text- p-5 w-full">
              <h3 className="text-2xl md:text-2xl mb-3 md:mb-4 font-bold">
                Prestation 1
              </h3>
              <p className=" flex flex-wrap gap-2 flex-row items-center justify-start text-lg md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat Convallis felis vitae tortor augue. Velit nascetur
                massa in.
              </p>
              <p className="flex space-x-5 text-green-700">
                Learn more{" "}
                <FaArrowRight className=" text-lg md:text-lg text-green-700" />{" "}
              </p>
            </div>
          </div>

          <div className=" bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden">
            <img
              src="../../public/2.png"
              alt=""
              className=" w-full h-36 md:h-52 object-cover"
            />
            <div className=" text- p-5 w-full">
              <h3 className="text-2xl md:text-2xl mb-3 md:mb-4 font-bold">
                Prestation 1
              </h3>
              <p className=" flex flex-wrap gap-2 flex-row items-center justify-start text-lg md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat Convallis felis vitae tortor augue. Velit nascetur
                massa in.
              </p>
              <p className="flex space-x-5 text-green-700">
                Learn more{" "}
                <FaArrowRight className=" text-lg md:text-lg text-green-700" />{" "}
              </p>
            </div>
          </div>

          <div className=" bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden">
            <img
              src="../../public/3.png"
              alt=""
              className=" w-full h-36 md:h-52 object-cover"
            />
            <div className=" text- p-5 w-full">
              <h3 className="text-2xl md:text-2xl mb-3 md:mb-4 font-bold">
                Prestation 1
              </h3>
              <p className=" flex flex-wrap gap-2 flex-row items-center justify-start text-lg md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat Convallis felis vitae tortor augue. Velit nascetur
                massa in.
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
