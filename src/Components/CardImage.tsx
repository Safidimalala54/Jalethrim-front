import React from "react";
import Grimoire from "../assets/grimoire.jpg";

type Props = {
  data: {
    // image: string;
    libelle: string;
  };
};

function Card({ data }: Props) {
  return (
    <div className="bg-left flex items-center justify-center w-[40%] h-full">
      <img src={Grimoire} alt={data.libelle} className="w-full h-full " />
    </div>
  );
}

export default Card;
