
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const Element = () => {
  return (
    <>
      <div className="my-10 md:my-14 px-10 md:px-12 mx-10 md:mx-10 md:py-10 py-8 block md:w-full">
        <div className="text-center md:pb-10 pb-10">
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

        <div className="grid grid-cols-1 md:grid-rows-2 gap-10">
          <div className="flex justify-start items-start flex-col gap-10">
            <div className="flex flex-col justify-start items-start md:py-4 py-5">
              <LiaPhoneVolumeSolid className=" text-xl md:text-2xl text-green-500 md:py-4 py-4" />
              <h2 className=" text-xl md:text-xl font-bold text-green-700 uppercase md:py-4 py-4">
                NOTRE MISSION
              </h2>
              <p className="text-lg md:text-base text-slate-900 max-w-md">
                Nous estimons être un acteur de confiance pour la couverture
                complémentaire santé du plus grand nombre durant la période de
                scolarité
              </p>
            </div>

            <div className="flex flex-col justify-start items-start md:py-4 py-5">
              <LiaPhoneVolumeSolid className=" text-xl md:text-2xl text-green-500 md:py-4 py-4" />
              <h2 className=" text-xl md:text-xl font-bold text-green-700 uppercase md:py-4 py-4">
                NOTRE PUBLIC
              </h2>
              <p className="text-lg md:text-base text-slate-900 max-w-md">
                Nos cibles sont des élèves et les étudiants. concrètement, nous
                prendrons en charge toutes les personnes scolarisées de 4ème
                année primaire au 6ème des humanités d’une part, et d’autre
                part, toutes les personnes inscrites régulièrement au parcours
                universitaire ou centre de formation professionnel.
              </p>
            </div>

            <div className="flex flex-col justify-start items-start md:py-4 py-5">
              <LiaPhoneVolumeSolid className=" text-xl md:text-2xl text-green-500 md:py-4 py-4" />
              <h2 className=" text-xl md:text-xl font-bold text-green-700 uppercase md:py-4 py-4">
                NOTRE DELIMITATION
              </h2>
              <p className="text-lg md:text-base text-slate-900 max-w-md">
                Nous accompagnons nos adhérents dès la 4ème années de scolarité
                jusqu’à la fin du cycle universitaire et/ou les apprentis
                inscrits régulièrement dans une formation professionnelle.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-2 gap-10"></div>
        </div>
      </div>
    </>
  );
};

export default Element;
