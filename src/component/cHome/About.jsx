import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineSettingsInputComposite } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="mx-10">
        <div className="flex flex-row justify-center items-center">
          <div className=" w-full md:w-6/4 h-full">
            <img src="../../public/about.png" className="" alt="about image" />
          </div>

          <div className=" w-full md:w-6/6">
            <h2 className="">Bienvenue chez musdeel</h2>
            <p className="">
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
            <p className="">
              Nous accompagnons nos adhérents dès la 4è années de scolarité
              jusqu’à la fin du cycle universitaire et/ou les apprentis inscrits
              régulièrement dans une formation professionnelle. Notre marque
              s’imprègne de nos coutumes et convictions de chaque adhérent. Nous
              sommes universels dans notre collaboration avec les adhérents sans
              distinction de la province d’origine
            </p>
            <p className="">
              Nous assurons la qualité de service à nos adhérents et à nos
              partenaires afin de vendre une bonne image de notre structure. Ce
              sérieux se traduit par l’accompagnement rigoureux de nos adhérents
              lors du parcours de soin. Nos gestionnaires mettront tout en œuvre
              pour satisfaire nos sociétaires et nos partenaires. En résumé : la
              qualité de service
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
