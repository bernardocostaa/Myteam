import React from "react";
import Styles from "./css/DirectorsCard.module.css";
import avatarNikita from "../imgs/avatar-nikita.jpg";
import avatarCristian from "../imgs/avatar-christian.jpg";
import avatarCruz from "../imgs/avatar-cruz.jpg";
import avatarDrake from "../imgs/avatar-drake.jpg";
import avatarGriffin from "../imgs/avatar-griffin.jpg";
import avatarAden from "../imgs/avatar-aden.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const DirectorsCard = () => {
  const [ativo, setAtivo] = React.useState({});

  const directors = [
    {
      name: "Nikita Marks",
      title: "Founder & CEO",
      desc: "Empowered teams create truly amazing products. Set the north star and let them follow it.",
      avatar: avatarNikita,
    },
    {
      name: "Cristian Duncan",
      title: "Co-founder & COO",
      desc: "Empowered teams create truly amazing products. Set the north star and let them follow it.",
      avatar: avatarCristian,
    },
    {
      name: "Cruz Hamer",
      title: "Co-founder & CTO",
      desc: "Empowered teams create truly amazing products. Set the north star and let them follow it.",
      avatar: avatarCruz,
    },
    {
      name: "Drake Heaton",
      title: "Business Development Lead",
      desc: "Empowered teams create truly amazing products. Set the north star and let them follow it.",
      avatar: avatarDrake,
    },
    {
      name: "Griffin Wise",
      title: "Lead Marketing",
      desc: "Empowered teams create truly amazing products. Set the north star and let them follow it.",
      avatar: avatarGriffin,
    },
    {
      name: "Aden Allan",
      title: "Head of Talent",
      desc: "Empowered teams create truly amazing products. Set the north star and let them follow it.",
      avatar: avatarAden,
    },
  ];

  function toggleActive(index){
    setAtivo((prevActiveCards)=>({
        ...prevActiveCards,
        [index]: !prevActiveCards[index]
    }))
  }

  return (
    <div className="customContainer mx-auto px-5">
      <ul className=" grid grid-cols-1 gap-4 laptop:grid-cols-2 desktop:grid-cols-3 justify-center">
        {directors.map((item, i) => (
          <li
            className={`${Styles.flipCard} max-w-[350px] w-full mx-auto`}
            key={i}
          >
            <div className={ativo[i] ? `${Styles.cardCont} ${Styles.ativo}` :`${Styles.cardCont}`}>
              <div className={`${Styles.cardFront} text-center`}>
                <img
                  className="w-24 h-24 rounded-full border-2 border-RaptureBlue m-auto mb-4"
                  src={item.avatar}
                  alt={item.name}
                />
                <p className="text-RaptureBlue font-bold text-lg">
                  {item.name}
                </p>
                <p className="text-white font-medium italic text-">
                  {item.title}
                </p>
                <button  onClick={() => toggleActive(i)} className="w-14 h-14 rounded-full bg-LightCoral mt-7 hover:bg-RaptureBlue transition-all duration-200 hover:rotate-45">
                  <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faPlus} />
                </button>
              </div>
              <div className={`${Styles.cardBack} text-center`}>
                <p className="text-RaptureBlue font-bold text-lg mb-2">{item.name}</p>
                <p className="text-white font-medium mb-6">{item.desc}</p>
                <div className="flex gap-4 justify-center">
                  <a
                    className="hover:text-LightCoral text-white cursor-pointer p-1"
                    href={item.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faTwitter} />
                  </a>
                  <a
                    className="hover:text-LightCoral text-white cursor-pointer p-1"
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faLinkedin} />
                  </a>
                </div>
                <button  onClick={() => toggleActive(i)} className="w-14 h-14 rounded-full bg-LightCoral mt-7 hover:bg-RaptureBlue transition-all duration-200 hover:rotate-45">
                  <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faPlus} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DirectorsCard;
