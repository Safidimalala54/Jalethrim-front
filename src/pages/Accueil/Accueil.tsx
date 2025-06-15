import { useEffect, useState } from "react";
import "./accueil.css";

import CardImage from "../../Components/CardImage";
import CardContent from "../../Components/CardContent";
import product from "../../data";
// import axios from "axios";

type Product = {
  id: string;
  reference: string;
  libelle: string;
  prix: number;
  estDuJour: boolean;
  quantiteEnStock: number;
};
function Accueil() {
  const [produitDuJour, setProduitDuJour] = useState<Product>({
    id: "",
    reference: "",
    libelle: "",
    prix: 0,
    estDuJour: false,
    quantiteEnStock: 0,
  });

  //FETCH API FROM BACKEND AND PRODUIT DU JOUR FILTERING
  useEffect(() => {
    const fetchAPIFunction = async () => {
      try {
        //const getProduct = await axios.get("http......."); //FETCH WITH AXIOS
        const response = await fetch(
          "http://localhost:3000/gondor_chic/produit-du-jour"
        );
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          // setProduitDuJour(data[0]);
          setProduitDuJour(product[0]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchAPIFunction();
  }, []);

  return (
    <div className="bg-img  w-screen h-screen justify-center flex items-center ">
      <div className=" w-[60%] px-5 py-8 h-[90%] max-w-[900px]">
        <p className="text-center font-bold text-6xl">Gondor Chic</p>
        <div className="container rounded-s-2xl flex overflow-hidden shadow-2xl w-auto h-[90%] mt-8">
          <CardImage data={produitDuJour} />
          <CardContent data={produitDuJour} />
        </div>
      </div>
    </div>
  );
}

export default Accueil;
