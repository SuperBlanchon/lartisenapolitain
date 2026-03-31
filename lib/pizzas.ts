export type Pizza = {
  name: string
  ingredients: string
  price: string
  vegetarian?: boolean
  calzone?: boolean
}

export const pizzasTomate: Pizza[] = [
  {
    name: 'Margarita',
    ingredients: 'Mozzarella râpée, olives',
    price: '9,00 €',
    vegetarian: true,
  },
  {
    name: 'Napoli',
    ingredients: 'Anchois, câpres, mozzarella râpée, olives',
    price: '11,50 €',
  },
  {
    name: 'Vegan',
    ingredients: 'Double tomate, aubergines, champignons, poivrons, oignons, olives',
    price: '12,50 €',
    vegetarian: true,
  },
  {
    name: '4 Fromages',
    ingredients: 'Chèvre, bleu, mozzarella râpée, parmesan râpé',
    price: '13,00 €',
    vegetarian: true,
  },
  {
    name: 'Royale',
    ingredients: 'Jambon, champignons, mozzarella râpée, olives',
    price: '13,00 €',
  },
  {
    name: 'Kebab',
    ingredients: 'Viande kebab, oignons, sauce kebab, mozzarella râpée',
    price: '13,00 €',
  },
  {
    name: 'India',
    ingredients: 'Poulet, curry, poivrons, mozzarella râpée, olives',
    price: '13,00 €',
  },
  {
    name: 'Orientale',
    ingredients: 'Merguez, poivrons, oignons, mozzarella râpée, olives',
    price: '13,00 €',
  },
  {
    name: 'Végétarienne',
    ingredients:
      'Aubergines, champignons, poivrons, oignons, mozzarella râpée, parmesan râpé, olives',
    price: '13,00 €',
    vegetarian: true,
  },
  {
    name: 'Calzone Forestière',
    ingredients: 'Jambon, champignons, œuf, mozzarella râpée, olives',
    price: '13,50 €',
    calzone: true,
  },
  {
    name: 'Grecque',
    ingredients: 'Viande hachée, aubergines, oignons, parmesan, mozzarella râpée, olives',
    price: '13,50 €',
  },
  {
    name: 'Américaine',
    ingredients: 'Viande hachée, bacon, oignons, cheddar, mozzarella râpée',
    price: '13,50 €',
  },
  {
    name: 'Carnivore',
    ingredients: 'Poulet, viande hachée, merguez, mozzarella râpée, olives',
    price: '14,50 €',
  },
  {
    name: '6 Fromages',
    ingredients: 'Chèvre, bleu, reblochon, raclette, mozzarella râpée, parmesan râpé',
    price: '15,00 €',
    vegetarian: true,
  },
]

export const pizzasCreme: Pizza[] = [
  {
    name: 'Boisé',
    ingredients: 'Poulet, oignons, poivrons, mozzarella râpée',
    price: '13,00 €',
  },
  {
    name: 'Chèvre Miel',
    ingredients: 'Chèvre, amandes effilées, miel, mozzarella râpée',
    price: '13,00 €',
    vegetarian: true,
  },
  {
    name: 'Raclette',
    ingredients: 'Jambon, raclette, champignons, mozzarella râpée',
    price: '13,50 €',
  },
  {
    name: 'Calzone Crème',
    ingredients: 'Jambon, lardons, oignons, œuf, mozzarella râpée',
    price: '13,50 €',
    calzone: true,
  },
  {
    name: 'Saumon',
    ingredients: "Saumon à l'huile d'olive citronnée, persillade maison, mozzarella râpée",
    price: '13,50 €',
  },
  {
    name: 'Montagnarde',
    ingredients: 'Poulet, pommes de terre, bleu, oignons, mozzarella râpée',
    price: '14,00 €',
  },
  {
    name: 'Blanche',
    ingredients: 'Jambon, lardons, crème de truffes, œuf, mozzarella râpée',
    price: '14,00 €',
  },
  {
    name: 'Tartiflette',
    ingredients: 'Pommes de terre, reblochon, lardons, oignons, mozzarella râpée',
    price: '14,50 €',
  },
  {
    name: 'Truffade',
    ingredients:
      'Jambon, lardons, pommes de terre, oignons, crème de truffes, mozzarella râpée',
    price: '15,00 €',
  },
]
