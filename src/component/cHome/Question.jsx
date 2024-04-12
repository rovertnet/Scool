import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { BiMinus } from "react-icons/bi";

const Question = () => {
  const [viewQuestionOne, setViewQuestionOne] = useState(false);
  const [viewQuestionTwo, setViewQuestionTwo] = useState(false);

  const viewQuestOne = () => {
    setViewQuestionOne(!viewQuestionOne);
  };

  const viewQuestTwo = () => {
    setViewQuestionTwo(!viewQuestionTwo);
  };
  return (
    <>
      <div className="mx-10 md:mx-10 md:my-10 my5">
        <div className="text-center md:py-10 py-10">
          <h1 className=" text-xl md:text-2xl text-center font-extrabold uppercase">
            Questions fréquemment posées
          </h1>
          <p className=" md:pt-3 pt-3">
            Nous avons essayé de répondre aux questions les plus courantes.{" "}
            <br /> Si vous en avez d autres, n hésitez pas à contacter notre{" "}
            <br /> équipe amicale.
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-10">
          <div className="border-[1px] border-slate-300 rounded-lg bg-slate-50 shadow-md">
            <div className="text-lg md:text-xl font-bold text-black flex justify-between md:px-10 px-10 md:py-5 py-5">
              01. Quelles sont nos offres ?
              <button
                className=" cursor-pointer hover:bg-slate-400 hover:p-2 hover:md:p-2 hover:rounded-full"
                onClick={viewQuestTwo}
              >
                {viewQuestionTwo ? (
                  <BiMinus className=" text-2xl md:text-2xl font-bold text-black" />
                ) : (
                  <FaPlus className=" text-2xl md:text-2xl font-bold text-black" />
                )}
              </button>
            </div>
            <div
              className={`${
                viewQuestionTwo
                  ? "text-justify md:px-10 px-10 md:pb-3 pb-5"
                  : "hidden md:hidden "
              }`}
            >
              The main feature of Whitespace UI that it saves you time. If it
              saves you time, it automatically saves you money. You no longer
              have to create a new UI kit from scratch before starting each
              project. Use Whitespace UI on an unlimited number of projects and
              save hundreds of hours and thousands of dollars.
            </div>
          </div>

          <div className="border-[1px] border-slate-300 rounded-lg bg-slate-50 shadow-md">
            <div className="text-lg md:text-xl font-bold text-black flex justify-between md:px-10 px-10 md:py-5 py-5">
              02. Comment devenir partenaire de la MUSDEEL ?
              <button
                className=" cursor-pointer hover:bg-slate-400 hover:p-2 hover:md:p-2 hover:rounded-full"
                onClick={viewQuestOne}
              >
                {viewQuestionOne ? (
                  <BiMinus className=" text-2xl md:text-2xl font-bold text-black" />
                ) : (
                  <FaPlus className=" text-2xl md:text-2xl font-bold text-black" />
                )}
              </button>
            </div>
            <div
              className={`${
                viewQuestionOne
                  ? "text-justify md:px-10 px-10 md:pb-3 pb-5"
                  : "hidden md:hidden "
              }`}
            >
              The main feature of Whitespace UI that it saves you time. If it
              saves you time, it automatically saves you money. You no longer
              have to create a new UI kit from scratch before starting each
              project. Use Whitespace UI on an unlimited number of projects and
              save hundreds of hours and thousands of dollars.
            </div>
          </div>

          <div className="border-[1px] border-slate-400 rounded-lg bg-slate-50 ">
            <div className="text-lg md:text-xl font-bold text-black flex justify-between md:px-10 px-10 md:py-5 py-5">
              03. Quelle est la politique de remboursement ?
            </div>
            <div className=" hidden md:hidden"></div>
          </div>

          <div className="border-[1px] border-slate-400 rounded-lg bg-slate-50 ">
            <h2 className="text-lg md:text-xl font-bold text-black flex justify-between md:px-10 px-10 md:py-5 py-5">
              04. Qu'est-ce qui se passera en cas de décès d un adhérent ?
              <VscWorkspaceTrusted className=" text-2xl md:text-xl text-green-500" />
            </h2>
            <div className="hidden md:hidden"></div>
          </div>

          <div className="border-[1px] border-slate-400 rounded-lg bg-slate-50 ">
            <h2 className="text-lg md:text-xl font-bold text-black flex justify-between md:px-10 px-10 md:py-5 py-5">
              05. Quelles sont les méthodes de paiement viables dans la MUSDEEL
              ?
              <VscWorkspaceTrusted className=" text-2xl md:text-xl text-green-500" />
            </h2>
            <div className="hidden md:hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
