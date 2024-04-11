import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdFavoriteBorder } from "react-icons/md";

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
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-5 md:mt-5 mt-10 ">
          <div className="flex md:flex-col flex-row md:px-12 mx-10">
            <div className="bg-slate-100 p-3 md:px-12">
              <MdFavoriteBorder className=" text-slate-800 text-center" />
              Traditionnelle
            </div>
            <div className="bg-green-600 text-center p-3 md:px-12 text-slate-100">
              <MdFavoriteBorder className=" text-slate-100 text-center" />
              <div>Sérieuse</div>
            </div>
            <div className="bg-slate-100 p-5 md:px-12">Texte</div>
            <div className="bg-slate-100 p-5 md:px-12">Texte</div>
            <div className="bg-green-600 md:px-10">Texte</div>
          </div>
          <div className=" md:py-10 py-7">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 md:py-8 py-7">
              Ensemble, nous sommes plus forts
            </h2>
            <div className=" grid grid-cols-2 gap-5 md:my-5 mb-5">
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-xl md:text-xl text-green-500" />
                <span>Texte</span>
              </div>
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-2xl md:text-xl text-green-500" />
                <span>Texte</span>
              </div>
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-2xl md:text-xl text-green-500" />
                <span>Texte</span>
              </div>
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-2xl md:text-xl text-green-500" />
                <span>Texte</span>
              </div>
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-2xl md:text-xl text-green-500" />
                <span>Texte</span>
              </div>
              <div className="flex space-x-3">
                <VscWorkspaceTrusted className=" text-2xl md:text-xl text-green-500" />
                <span>Texte</span>
              </div>
            </div>
            <div className=" my-2 md:max-w-lg text-justify">
              <p className="md:py-2 py-3">
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
          <div className="grid md:grid-cols-1 grid-cols-2 gap-5">
            <img
              src="../../public/image/1.png"
              alt=""
              className=" md:h-[180px] md:w-[200px] w-full"
            />
            <img
              src="../../public/image/2.png"
              alt=""
              className="md:h-[180px] md:w-[200px] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
