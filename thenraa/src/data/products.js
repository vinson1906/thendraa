// Source: THENRAA brochure, "Our Available Products". No prices, sizes or specs are listed on purpose.
export const products = [
  { id: 'coconut-oil', number: '01', title: 'Coconut Oil', icon: 'bottle',
    description: "A familiar, versatile product that forms the beginning of THENRAA's range." },
  { id: 'coconut-tree-saplings', number: '02', title: 'Coconut Tree Saplings', icon: 'sapling',
    description: 'For planting coconut trees or expanding existing plantations.' },
  { id: 'coconut-oil-cake', number: '03', title: 'Coconut Oil Cake', icon: 'cake',
    description: 'Obtained after oil extraction from dried coconut kernels, making use of the material left behind.' },
]
export const productNames = products.map((p) => p.title)
