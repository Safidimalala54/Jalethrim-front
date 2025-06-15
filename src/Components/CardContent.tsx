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

function CardContent({ data }: Props) {
  const [formData, setFormData] = useState({ nom: "", pswd: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("Submit", formData);
      //const sendFormData=await fetch
    } catch (error) {
      console.log(error);
    }
  };

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
      <form onSubmit={handleSubmit} className="mt-20   w-full">
        <div className="items-center flex gap-4 justify-between">
          <div className="w-[1/2]">
            <p style={{ color: "#AE8E75" }} className="mb-2">
              Marque du pelerin
            </p>
            <input
              className="rounded-md w-[200px]"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, nom: e.target.value }))
              }
              name="nom"
              value={formData.nom}
              required
              type="text"
            />
          </div>
          <div style={{ color: "#AE8E75" }} className="w-[1/2]">
            <p className="mb-2">Cle magique</p>
            <input
              className="rounded-md w-[200px]"
              name="pswd"
              value={formData.pswd}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, pswd: e.target.value }))
              }
              required
              type="password"
            />
          </div>
        </div>

        <button className="custom-btn mt-10 rounded-lg px-4 text-md py-1 text-[#AB8559]">
          Passage
        </button>
      </form>
    </div>
  );
}

export default CardContent;
