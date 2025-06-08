import React from "react";
import Grimoire from "../assets/grimoire.png";

type Props = {
  data: {
    // image: string;
    libelle: string;
  };
};

function Card({ data }: Props) {
  return (
    <div className="bg-left flex items-center justify-center w-[40%] h-full">
      <img src={Grimoire} alt={data.libelle} className="w-[85%] rounded-md" />
    </div>
  );
}

export default Card;
