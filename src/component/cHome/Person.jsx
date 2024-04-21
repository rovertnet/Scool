import { VscWorkspaceTrusted } from "react-icons/vsc";

const Person = () => {
  return (
    <>
      <div className=" my-10 md:my-14 px-10 md:px-12 block md:w-full">
        <div className="text-center md:pb-10 pb-10">
          <h2 className=" text-base text-green-700 font-medium md:text-xl">
            Des soins auxquels vous pouvez croire
          </h2>
          <h3 className=" text-black text-2xl uppercase font-bold">
            Notre personnalité
          </h3>
        </div>
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-5 md:mt-5 mt-10">
          <div className="flex md:flex-col flex-row md:px-8 px-7 border-[1px] border-transparent">
            <div className="bg-slate-100 px-12 md:px-3 text-center items-center flex flex-col justify-center gap-3 md:py-9 py-9">
              <img
                src="../../public/p1.png"
                alt=""
                className=" w-10 h-10 items-center"
              />
              <div>Traditionnelle</div>
            </div>
            <div className="bg-green-600 text-center md:py-9 py-9 px-4 md:px-5 text-slate-100 items-center flex flex-col justify-center gap-3">
              <img
                src="../../public/p1.png"
                alt=""
                className=" w-10 h-10 items-center"
              />
              <div>Sérieuse</div>
            </div>
            <div className="bg-slate-100 text-center md:py-9 py-9 px-4 md:px-5 items-center flex flex-col justify-center gap-3">
              <img
                src="../../public/p1.png"
                alt=""
                className=" w-10 h-10 items-center"
              />
              <div>Texte</div>
            </div>
            <div className="bg-slate-100 text-center md:py-9 py-9 px-4 md:px-5 items-center flex flex-col justify-center gap-3">
              <img
                src="../../public/p1.png"
                alt=""
                className=" w-10 h-10 items-center"
              />
              <div>Texte</div>
            </div>
            <div className="bg-green-600 text-center px-4 md:px-5">Texte</div>
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
              className=" md:h-[180px] md:w-[200px] w-full rounded-lg"
            />
            <img
              src="../../public/image/2.png"
              alt=""
              className="md:h-[180px] md:w-[200px] w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
