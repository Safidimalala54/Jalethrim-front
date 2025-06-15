// import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import { useState } from "react";

type Props = {
  data: {
    id: string;
    reference: string;
    libelle: string;
    prix: number;
    estDuJour: boolean;
    quantiteEnStock: number;
  };
};

function CardContentPerso({ data }: Props) {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <div className="py-12 w-[60%] px-10">
      <h1 className="text-black text-xl mb-2">
        Bienvenue Frodon Sake
        <br />
        La mission commence
      </h1>

      <p>Produit du jour</p>
      <p
        style={{ color: "#C88150" }}
        className="text-4xl font-semibold w-[100px]"
      >
        {/* {data.libelle} */}
        Grimmoire magic
      </p>
      <p className="mt-10">Prix</p>
      <p className="text-[#AE8E75] text-xl">{data.prix} Gondariar</p>
      <p className="mt-5">{data.quantiteEnStock} Stock</p>
      <div>
        <div className="mt-10 flex items-center gap-2 w-full">
          {/* <ArrowLeftIcon /> */}
          <button
            onClick={() => {
              if (quantity > 0) setQuantity((prev) => prev - 1);
            }}
          >
            <FaCaretLeft style={{ color: "#AE8E75", fontSize: "18px" }} />
          </button>
          <p className="bg-white flex items-center px-1 h-5 w-8 ">
            <span>{quantity}</span>
          </p>
          {/* <ArrowRightIcon /> */}
          <button onClick={() => setQuantity((prev) => prev + 1)}>
            <FaCaretRight style={{ color: "#AE8E75", fontSize: "18px" }} />
          </button>
        </div>

        <button className="custom-btn mt-10 rounded-lg px-4 text-md py-1 text-[#AB8559]">
          Reclamer produit
        </button>
      </div>
    </div>
  );
}

export default CardContentPerso;
