import { LiaPhoneVolumeSolid } from "react-icons/lia";

const Contact = () => {
  return (
    <>
      <div className="md:mx-40 mx-10 md:my-10 my-9">
        <div className=" flex flex-col gap-5 md:py-5 py-5 md:px-10 px-10 bg-green-700 rounded-lg justify-center items-center">
          <h2 className="text-center text-xl md:text-2xl font-bold text-slate-100 leading-normal">
            Vous avez encore de questions ?
          </h2>
          <p className=" text-base md:text-lg text-slate-200 font-normal md:max-w-lg max-w-sm text-center">
            Nous sommes désolés de ne pas pouvoir vous fournir les informations
            que vous recherchiez. Veuillez nous contacter et nous serons heureux
            de vous aider.
          </p>
          <button className=" bg-slate-900 text-lg md:text-xl font-semibold text-slate-50 flex space-x-3 md:space-x-3">
            <LiaPhoneVolumeSolid className=" font-extrabold text-6xl text-green-600" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
