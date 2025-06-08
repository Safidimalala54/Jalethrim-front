import React from "react";

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

function CardContent({ data }: Props) {
  return (
    <div className="py-12 w-[60%] px-10">
      <p>Produit du jour</p>
      <p
        style={{ color: "#C88150" }}
        className="text-4xl font-semibold w-[100px]"
      >
        {data.libelle}
      </p>
      <p className="mt-10">Prix</p>
      <p className="text-[#AE8E75] text-xl">{data.prix} Gondariar</p>
      <p className="mt-5">{data.quantiteEnStock} Stock</p>
      <div className="mt-20 flex items-center gap-4 justify-between w-full">
        <div className="w-[1/2]">
          <p style={{color: "#AE8E75"}} className="mb-2">Marque du pelerin</p>
          <input className="rounded-md w-[200px]" type="text" />
        </div>
        <div style={{color: "#AE8E75"}} className="w-[1/2]">
          <p className="mb-2">Cle magique</p>
          <input className="rounded-md w-[200px]" type="password" />
        </div>
      </div>

      <button className="custom-btn mt-10 rounded-lg px-4 text-md py-1 text-[#AB8559]">
        Passage
      </button>

    </div>
  );
}

export default CardContent;
