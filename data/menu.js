export const categories = [
  { id: "all", label: "Tous", icon: "UtensilsCrossed" },
  { id: "burgers", label: "Burgers", icon: "Beef" },
  { id: "shawarma", label: "Shawarma", icon: "Sandwich" },
  { id: "pastry", label: "Pâtisseries", icon: "CakeSlice" },
  { id: "breakfast", label: "Petits-déjeuners", icon: "Croissant" },
  { id: "drinks", label: "Boissons", icon: "CupSoda" }
];

export const sections = [
  { id: "burgers", title: "Burgers & Grillades", icon: "Beef" },
  { id: "shawarma", title: "Shawarma & Sandwichs", icon: "Sandwich" },
  { id: "breakfast", title: "Petits-déjeuners", icon: "Croissant" },
  { id: "pastry", title: "Pâtisseries & Desserts", icon: "CakeSlice" },
  { id: "drinks", title: "Boissons", icon: "CupSoda" }
];

export const menuItems = [
  // Burgers & Grillades
  {
    id: "cherry-burger",
    category: "burgers",
    name: "Cherry Burger",
    description:
      "Bœuf frais, cheddar fondu, sauce maison, cornichons, pain brioché grillé",
    price: "85 000 GNF",
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "poulet-grille",
    category: "burgers",
    name: "Poulet Grillé",
    description:
      "Filet de poulet mariné, légumes grillés, sauce aigre-douce, riz pilaf",
    price: "80 000 GNF"
  },
  {
    id: "chicken-crispy",
    category: "burgers",
    name: "Chicken Crispy",
    description: "Poulet frit croustillant, sauce ranch, crudités, frites maison",
    price: "78 000 GNF",
    badge: "Nouveau"
  },
  {
    id: "mixed-grill",
    category: "burgers",
    name: "Mixed Grill",
    description: "Assortiment viandes grillées (bœuf + poulet), frites, salade",
    price: "120 000 GNF"
  },
  // Shawarma & Sandwichs
  {
    id: "shawarma-poulet",
    category: "shawarma",
    name: "Shawarma Poulet",
    description: "Poulet mariné, légumes frais, sauce blanche ail, pain pita chaud",
    price: "75 000 GNF",
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "shawarma-boeuf",
    category: "shawarma",
    name: "Shawarma Bœuf",
    description:
      "Bœuf tranché, oignons caramélisés, tomates, sauce tahini, pain pita",
    price: "85 000 GNF"
  },
  {
    id: "wrap-vegetarien",
    category: "shawarma",
    name: "Wrap Végétarien",
    description: "Légumes grillés, hummus maison, roquette, vinaigrette citron",
    price: "65 000 GNF"
  },
  // Petits-déjeuners
  {
    id: "formule-continentale",
    category: "breakfast",
    name: "Formule Continentale",
    description: "Croissant + pain au chocolat + café ou thé + jus d'orange",
    price: "55 000 GNF"
  },
  {
    id: "formule-complete",
    category: "breakfast",
    name: "Formule Complète",
    description: "Œufs (au choix) + toast + viennoiserie + boisson chaude + jus",
    price: "75 000 GNF",
    badge: "Populaire"
  },
  {
    id: "pancakes-cherry",
    category: "breakfast",
    name: "Pancakes Cherry",
    description: "Pancakes maison, sirop d'érable, fruits frais, beurre",
    price: "60 000 GNF"
  },
  // Pâtisseries & Desserts
  {
    id: "plateau-patisseries",
    category: "pastry",
    name: "Plateau Pâtisseries (4 pièces)",
    description:
      "Assortiment du jour : éclairs, tartelettes, choux, mille-feuilles",
    price: "60 000 GNF",
    badge: "Nouveau",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "glace-artisanale",
    category: "pastry",
    name: "Glace Artisanale (2 boules)",
    description: "Saveurs du jour — vanille, chocolat, fruits rouges",
    price: "40 000 GNF"
  },
  {
    id: "fondant-chocolat",
    category: "pastry",
    name: "Fondant au Chocolat",
    description:
      "Cœur coulant, boule de glace vanille, coulis de fruits rouges",
    price: "55 000 GNF"
  },
  {
    id: "tiramisu-maison",
    category: "pastry",
    name: "Tiramisu Maison",
    description: "Café, mascarpone, biscuits, cacao en poudre",
    price: "50 000 GNF"
  },
  // Boissons
  {
    id: "jus-fraicheur",
    category: "drinks",
    name: "Jus Fraîcheur Maison",
    description: "Mix bissap-kiri, ananas-gingembre, ou mangue-passion",
    price: "35 000 GNF",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "milkshake-cherry",
    category: "drinks",
    name: "Milkshake Cherry",
    description: "Fruits rouges, lait entier, glace vanille, chantilly",
    price: "45 000 GNF"
  },
  {
    id: "cafe-expresso",
    category: "drinks",
    name: "Café Expresso",
    description: "Simple / Double — grains arabica sélectionnés",
    price: "20 000 GNF"
  },
  {
    id: "mocktail-du-jour",
    category: "drinks",
    name: "Mocktail du Jour",
    description: "Création du bartender — demander la carte du soir",
    price: "40 000 GNF"
  }
];

// Les 4 bestsellers affichés sur la page d'accueil
export const homeBestsellers = [
  menuItems.find((i) => i.id === "cherry-burger"),
  menuItems.find((i) => i.id === "shawarma-poulet"),
  menuItems.find((i) => i.id === "plateau-patisseries"),
  menuItems.find((i) => i.id === "jus-fraicheur")
];
