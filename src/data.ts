import image from "./assets/image.png";

const product = [
  {
    id: "1",
    reference: "P12",
    libelle: "Grimoire Magic",
    // image: image,
    prix: 500.0,
    estDuJour: true,
    quantiteEnStock: 5,
  },
  {
    id: "2",
    reference: "P13",
    libelle: "Chemise de Mithril",
    // image: image,
    prix: 200.0,
    estDuJour: false,
    quantiteEnStock: 2,
  },
  {
    id: "3",
    reference: "P14",
    libelle: "Poudre de fee",
    // image: image,
    prix: 100.0,
    estDuJour: false,
    quantiteEnStock: 0,
  },
];

export default product;
