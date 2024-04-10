import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineSettingsInputComposite } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className=" my-10 md:my-14 px-10 md:px-12 lg:my-14 lg:px-12 block">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10">
          <>
            <img
              src="../../public/image/img1.png"
              className="w-full md:w-1/1 h-full"
              alt="about image"
            />
          </>

          <div className=" w-full md:w-4/4 lg:w-4/4 md:mt-0 md:mb-5 lg:mb-5 mt-5 lg:mt-2">
            <h2 className=" uppercase font-bold md:text-2xl text-xl text-green-700">
              Bienvenue chez musdeel
            </h2>
            <p className="md:text-lg text-2xl text-slate-800 font-semibold text-justify md:my-6 my-4">
              Nous assurons la proximité avec un accompagnement à chaque étape
              des soins, jusqu’à la guérison du patient scolarisé et à jour dans
              ses cotisations
            </p>
            <div className=" grid grid-cols-2 md:grid-cols-2 md:gap-3 gap-5 ">
              <p className=" flex md:space-x-5 space-x-3 text-lg text-slate-700 ">
                <MdOutlineSettingsInputComposite className=" text-xl text-green-500" />
                Professionalisme
              </p>
              <p className=" flex text-lg text-slate-700 space-x-3">
                <MdOutlineSettingsInputComposite className=" text-xl text-green-500" />
                Cohésion
              </p>
              <p className=" flex space-x-3 text-lg text-slate-700">
                <MdOutlineSettingsInputComposite className=" text-xl text-green-500" />
                Proximité
              </p>
              <p className=" flex space-x-3 text-lg text-slate-700 ">
                <MdOutlineSettingsInputComposite className=" text-xl text-green-500" />
                Respect
              </p>
              <p className=" flex space-x-3 text-lg text-slate-700 ">
                <VscWorkspaceTrusted className=" text-xl text-green-500" />
                Confiance
              </p>
            </div>
            <p className=" font-medium md:text-lg sm:text-lg text-2xl text-justify text-slate-800 md:my-6 my-4">
              Nous accompagnons nos adhérents dès la 4è années de scolarité
              jusqu’à la fin du cycle universitaire et/ou les apprentis inscrits
              régulièrement dans une formation professionnelle. Notre marque
              s’imprègne de nos coutumes et convictions de chaque adhérent. Nous
              sommes universels dans notre collaboration avec les adhérents sans
              distinction de la province d’origine
            </p>
            <p className=" font-medium md:text-lg sm:text-lg text-2xl text-justify text-slate-800">
              Nous assurons la qualité de service à nos adhérents et à nos
              partenaires afin de vendre une bonne image de notre structure. Ce
              sérieux se traduit par l’accompagnement rigoureux de nos adhérents
              lors du parcours de soin. Nos gestionnaires mettront tout en œuvre
              pour satisfaire nos sociétaires et nos partenaires. En résumé : la
              qualité de service
            </p>
            <div className=" mt-5 md:mt-2">
              <button className=" text-white md:rounded-full rounded-md text-xl px-24 md:px-16 py-3 md:py-1 font-semibold bg-green-700">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
