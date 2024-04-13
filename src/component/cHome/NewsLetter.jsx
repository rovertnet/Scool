
const NewsLetter = () => {
  return (
    <>
      <div className="md:mx-10 mx-10 md:my-10 my-10">
        <div className="flex flex-col justify-start items-start bg-green-700 md:px-10 px-10 md:py-5 py-6">
          <h2 className=" md:text-lg text-lg leading-normal text-slate-50 font-bold">
            Entrez votre adresse e mail et recevez de nouvelles chaque matin
          </h2>
          <p className=" text-base md:text-base font-semibold text-slate-100">
            Restez au courant des informations les plus pertinentes, de nos
            nouvelles prestations, des actualités et des offres spéciales !
          </p>
          <div className="flex space-x-3">
            <input
              type="mail"
              placeholder="Votre adresse email"
              className=" md:px-5 px-5 md:py-3 py-2 outline outline-0 focus:outline-0"
            />
            <button className="bg-black px-5 md:px-5 md:py-3 py-2 hover:bg-slate-900"></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter