import { VscWorkspaceTrusted } from "react-icons/vsc";

const Element = () => {
  return (
    <>
      <div className="my-10 md:my-14 px-10 md:px-12 md:py-10 py-8 block md:w-full">
        <div className="text-center md:pb-10 pb-10">
          <h2 className=" text-2xl text-slate-900 uppercase font-bold md:text-2xl">
            4 ELEMENTS NOUS DEFINISSENT
          </h2>
          <p className=" text-black text-base  font-normal">
            Our services are designed to cater to your specific needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-rows-2 gap-10">
          <div className="flex justify-start items-start flex-col gap-10">
            <div className="flex flex-col justify-start items-start md:py-5 py-6">
              <VscWorkspaceTrusted className=" text-xl text-green-500" />
              <h2 className=" text-xl md:text-2xl font-bold text-green-700 uppercase">NOTRE MISSION</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-2 gap-10"></div>
        </div>
      </div>
    </>
  );
};

export default Element;
