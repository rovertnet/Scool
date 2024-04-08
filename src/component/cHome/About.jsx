import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineSettingsInputComposite } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className=" my-10 md:my-12 px-10 md:px-12">
        <div className="flex flex-row justify-center items-center">
          <div className=" w-full md:w-4/4 h-full">
            <img src="../../public/about.png" className="" alt="about image" />
          </div>

          <div className=" w-full md:w-4/4 md:mt-4">
            <h2 className=" uppercase font-bold text-2xl text-green-700">
              Bienvenue chez musdeel
            </h2>
            <p className=" text-xl text-slate-800 font-semibold text-justify md:my-6 my-4">
              Nous assurons la proximité avec un accompagnement à chaque étape
              des soins, jusqu’à la guérison du patient scolarisé et à jour dans
              ses cotisations
            </p>
            <div className=" grid grid-cols-2 gap-3 ">
              <p className=" flex text-lg text-slate-700 gap-3">
                <MdOutlineSettingsInputComposite className=" text-lg text-green-500" />
                Professionalisme
              </p>
              <p className=" flex text-lg text-slate-700 gap-3">
                <MdOutlineSettingsInputComposite className=" text-lg text-green-500" />
                Cohésion
              </p>
              <p className=" flex text-lg text-slate-700 gap-3">
                <MdOutlineSettingsInputComposite className=" text-lg text-green-500" />
                Proximité
              </p>
              <p className=" flex text-lg text-slate-700 gap-3">
                <MdOutlineSettingsInputComposite className=" text-lg text-green-500" />
                Respect
              </p>
              <p className=" flex text-lg text-slate-700 gap-3">
                <VscWorkspaceTrusted className=" text-lg text-green-500" />
                Confiance
              </p>
            </div>
            <p className=" font-medium text-xl text-justify text-slate-800 md:my-6">
              Nous accompagnons nos adhérents dès la 4è années de scolarité
              jusqu’à la fin du cycle universitaire et/ou les apprentis inscrits
              régulièrement dans une formation professionnelle. Notre marque
              s’imprègne de nos coutumes et convictions de chaque adhérent. Nous
              sommes universels dans notre collaboration avec les adhérents sans
              distinction de la province d’origine
            </p>
            <p className=" font-medium text-xl text-justify text-slate-800">
              Nous assurons la qualité de service à nos adhérents et à nos
              partenaires afin de vendre une bonne image de notre structure. Ce
              sérieux se traduit par l’accompagnement rigoureux de nos adhérents
              lors du parcours de soin. Nos gestionnaires mettront tout en œuvre
              pour satisfaire nos sociétaires et nos partenaires. En résumé : la
              qualité de service
            </p>
            <div className=" mt-5 md:mt-5">
              <button className=" text-white rounded-full text-xl px-6 md:px-16 py-3 font-semibold bg-green-700">
                En svoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
