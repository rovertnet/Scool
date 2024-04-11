import { VscWorkspaceTrusted } from "react-icons/vsc";

const Person = () => {
  return (
    <>
      <div className=" my-10 md:my-14 px-10 md:px-12 lg:my-14 lg:px-12 block md:w-full">
        <div className="text-center">
          <h2 className=" text-base text-green-700 font-medium md:text-xl">
            Des soins auxquels vous pouvez croire
          </h2>
          <h3 className=" text-black text-2xl uppercase font-bold">
            Notre personnalité
          </h3>
        </div>
        <div className=" flex flex-row justify-center items-center gap-5 md:mt-5 mt-10 ">
          <div className="flex md:flex-col flex-row gap-3 bg-white border-[1px] shadow-md border-slate-500 p-6 md:px-14">
            <div className="bg-green-600 p-5 md:px-14">Texte</div>
            <div className="bg-green-600 p-5 md:px-14">Texte</div>
            <div className="bg-green-600 p-5 md:px-14">Texte</div>
            <div className="bg-green-600 p-5 md:px-14">Texte</div>
            <div className="bg-green-600 p-3 md:px-12">Texte</div>
          </div>
          <div className=" md:py-10 py-7">
            <h2 className="text-xl font-bold text-slate-800 md:pt-8 pt-7">
              Ensemble, nous sommes plus forts
            </h2>
            <div className=" grid grid-cols-2 gap-5 md:my-5">
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-xl text-green-500" />
                <span>Texte</span>
              </div>
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-xl text-green-500" />
                <span>Texte</span>
              </div>
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-xl text-green-500" />
                <span>Texte</span>
              </div>
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-xl text-green-500" />
                <span>Texte</span>
              </div>
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-xl text-green-500" />
                <span>Texte</span>
              </div>
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-xl text-green-500" />
                <span>Texte</span>
              </div>
            </div>
            <div className=" my-5 md:max-w-lg text-justify">
              <p className="md:py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Quisque placerat
                scelerisque tortor ornare ornare Convallis felis vitae tortor
                augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque. Convallis felis vitae tortor augue. Velit
                nascetur proin massa in.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-1 grid-rows-2 gap-5">
            <img
              src="../../public/image/1.png"
              alt=""
              className=" md:h-[180px] md:w-[200px]"
            />
            <img
              src="../../public/image/2.png"
              alt=""
              className="h-[180px] md:w-[200px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
