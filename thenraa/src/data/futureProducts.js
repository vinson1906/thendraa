// Source: THENRAA brochure page 2, "The Road Ahead". Names are unchanged; numbering matches the brochure.
const all = [
  'Virgin Coconut Oil','Coconut Milk and Cream','Packaged and Flavoured Coconut Water','Desiccated Coconut',
  'Coconut Flour','Coconut Chips and Snacks','Coconut Sugar','Coconut Confectionery and Candy','Coconut Ice Cream',
  'Coconut Vinegar','Activated Carbon from Coconut Shells','Charcoal Briquettes','Coir Rugs and Mats','Coir Pith Blocks',
  'Husk Fibre Products','Coconut-Based Cosmetics','Coconut Protein Powder','Coconut Jam and Spread',
  'Coconut Alcoholic Beverages','VCO Animal Feed','Bio-Fertilizer from Coconut Husk','Coconut Shell Crafts',
  'Coconut Ready-to-Eat Meals','Coconut Nutraceuticals','Coconut Baby Food',
]
const pick = (...ns) => ns.map((n) => ({ number: String(n).padStart(2, '0'), name: all[n - 1] }))

export const futureCategories = [
  { id: 'food', title: 'Food and Beverages', icon: 'bowl', items: pick(2,3,4,5,6,7,8,9,10,17,18,19,23,25) },
  { id: 'care', title: 'Oils, Personal Care and Wellness', icon: 'drop', items: pick(1,16,24) },
  { id: 'materials', title: 'Household and Materials', icon: 'shell', items: pick(11,12,13,14,15,22) },
  { id: 'agri', title: 'Agricultural Applications', icon: 'sapling', items: pick(20,21) },
]
export const futureCount = futureCategories.reduce((n, c) => n + c.items.length, 0)
