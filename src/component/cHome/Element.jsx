import { BiSolidCheckCircle } from "react-icons/bi";
import { BiSolidEnvelopeOpen } from "react-icons/bi";
import { BsFillPhoneFill } from "react-icons/bs";


const Element = () => {
  return (
    <>
      <div className="my-10 md:my-14 px-10 md:px-12 block md:w-full">
        <div className="text-center md:pb-10 pb-10 md:py-10 py-10">
          <span className=" bg-slate-200 px-2 md:px-2 py-1 md:py-1 rounded-3xl text-green-700 font-bold">
            LA MUSDEEL
          </span>
          <h2 className=" text-2xl text-slate-900 uppercase font-bold md:text-2xl">
            4 ELEMENTS NOUS DEFINISSENT
          </h2>
          <p className=" text-black text-base  font-normal">
            Our services are designed to cater to your specific needs and goals
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center gap-10">
          <div className="flex justify-start items-start flex-col gap-5 md:w-3/6">
            <div className="flex flex-col justify-start items-start md:py-4 py-5">
              <BiSolidCheckCircle className=" text-3xl md:text-5xl text-green-700" />
              <h2 className=" text-xl md:text-xl font-bold text-green-700 uppercase md:py-4 py-4">
                NOTRE MISSION
              </h2>
              <p className="text-lg md:text-lg text-slate-900  text-justify">
                Nous estimons être un acteur de confiance pour la couverture
                complémentaire santé du plus grand nombre durant la période de
                scolarité
              </p>
            </div>

            <div className="flex flex-col justify-start items-start md:py-4 py-5">
              <BsFillPhoneFill className=" text-3xl md:text-5xl text-green-700" />
              <h2 className=" text-xl md:text-xl font-bold text-green-700 uppercase md:py-4 py-4">
                NOTRE PUBLIC
              </h2>
              <p className="text-lg md:text-lg text-slate-900  text-justify">
                Nos cibles sont des élèves et les étudiants. concrètement, nous
                prendrons en charge toutes les personnes scolarisées de 4ème
                année primaire au 6ème des humanités d’une part, et d’autre
                part, toutes les personnes inscrites régulièrement au parcours
                universitaire ou centre de formation professionnel.
              </p>
            </div>

            <div className="flex flex-col justify-start items-start md:py-4 py-5">
              <BiSolidEnvelopeOpen className=" text-3xl md:text-5xl text-green-700" />
              <h2 className=" text-xl md:text-xl font-bold text-green-700 uppercase md:py-4 py-4">
                NOTRE DELIMITATION
              </h2>
              <p className="text-lg md:text-lg text-slate-900 text-justify">
                Nous accompagnons nos adhérents dès la 4ème années de scolarité
                jusqu’à la fin du cycle universitaire et/ou les apprentis
                inscrits régulièrement dans une formation professionnelle.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-2 md:gap-5 gap-5 md:w-1/3 md:mt-16">
            <div className="">
              <img
                src="../../public/i4.jpg"
                alt=""
                className=" md:h-60 md:w-72 h-full rounded-lg"
              />
            </div>

            <div className="">
              <img
                src="../../public/i1.jpg"
                alt=""
                className=" md:h-60 h-full rounded-lg"
              />
            </div>

            <div className="">
              <img
                src="../../public/i3.jpg"
                alt=""
                className=" md:h-60  md:w-72 h-full rounded-lg"
              />
            </div>

            <div className="">
              <img
                src="../../public/i2.jpg"
                alt=""
                className=" md:h-60 h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Element;
