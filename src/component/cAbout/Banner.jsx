
const Banner = () => {
  return (
    <>
      <div>
        <div className=" bg-center bg-cover p-9 w-full h-full bg-[url('../../public/medecin_banner.png')] my-5 md:my-4">
          <div className=" flex justify-start items-center">
            <span className=" font-medium text-md text-green-500">
              Le titre
            </span>
            <p className=" font-extrabold text-3xl text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              adipisci et voluptate iusto? Repudiandae ad recusandae, natus quas
              ratione exercitationem autem eos deleniti molestiae rerum tempora
              nam aut. Iusto, libero.
            </p>
            <div className="">
              <button className=" bg-green-700 rounded-full md:px-4 px-5 md:py-3 py-4 text-lg font-bold text-white">
                Adherer maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner