
const NewsLetter = () => {
  return (
    <>
      <div className="md:mx-10 mx-10 md:my-10 my-10">
        <div className="flex flex-col justify-start items-start gap-5 rounded-lg bg-green-700 md:px-10 px-10 md:py-12 py-10">
          <h2 className=" md:text-2xl text-lg leading-normal text-slate-50 font-extrabold max-w-lg">
            Entrez votre adresse e mail et recevez de nouvelles chaque matin
          </h2>
          <p className=" text-base md:text-xl font-semibold text-slate-100 max-w-lg">
            Restez au courant des informations les plus pertinentes, de nos
            nouvelles prestations, des actualités et des offres spéciales !
          </p>
          <div className="flex flex-col md:flex-row gap-5 space-x-3">
            <input
              type="mail"
              placeholder="Votre adresse email"
              className=" md:px-5 px-5 md:py-3 py-2 outline outline-0 focus:outline-0 md:max-w-full rounded-lg"
            />
            <button className="bg-black px-12 md:px-5 md:py-3 py-2 rounded-lg hover:bg-slate-900 text-lg font-bold text-slate-50">Souscrire</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter