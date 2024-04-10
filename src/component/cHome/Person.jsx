import { VscWorkspaceTrusted } from "react-icons/vsc";

const Person = () => {
  return (
    <>
      <div className=" my-10 md:my-14 px-10 md:px-12 lg:my-14 lg:px-12 block">
        <div className="text-center">
          <h2 className=" text-base text-green-700 font-medium md:text-xl">
            Des soins auxquels vous pouvez croire
          </h2>
          <h3 className=" text-black text-2xl uppercase font-bold">
            Notre personnalité
          </h3>
        </div>
        <div className=" flex flex-row justify-center items-center gap-5">
          <div className="flex md:flex-col flex-row gap-3 bg-white border-[1px] border-white p-6 md:p-4">
            <div className="bg-green-600 p-5 md:p-4">Texte</div>
            <div className="bg-green-600 p-5 md:p-4">Texte</div>
            <div className="bg-green-600 p-5 md:p-4">Texte</div>
            <div className="bg-green-600 p-5 md:p-4">Texte</div>
            <div className="bg-green-600 p-3 md:p-2">Texte</div>
          </div>
          <div className="">
            <h2 className="text-xl font-bold text-slate-800">
              Ensemble, nous sommes plus forts
            </h2>
            <div className=" grid grid-cols-2 gap-5">
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
            <div className=" md:my-3 my-5">
              <p>
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
            <div>
              <img
                src="../../public/image/1.png"
                alt=""
                className=" md:h-[250px] md:w-[] "
              />
              <img
                src="../../public/image/2.png"
                alt=""
                className="h-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
