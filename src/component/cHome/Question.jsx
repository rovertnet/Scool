const Question = () => {
  return (
    <>
      <div className="mx-10 md:mx-10">
        <div className="text-center md:py-10 py-10">
          <h1 className=" text-xl md:text-2xl text-center font-extrabold uppercase">
            Questions fréquemment posées
          </h1>
          <p className=" md:pt-3 pt-3">
            Nous avons essayé de répondre aux questions les plus courantes. <br /> Si
            vous en avez d autres, n hésitez pas à contacter notre <br /> équipe
            amicale.
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-10">
          <div className="border-[1px] border-slate-400 rounded-lg bg-slate-100 ">
            <h2 className="text-xl md:text-lg font-bold text-black"></h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
