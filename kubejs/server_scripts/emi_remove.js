RecipeViewerEvents.removeEntries('item', event => {
  ['create_sa:copper_helmet', 'create_sa:copper_chestplate','create_sa:copper_leggings','create_sa:copper_boots',
  'iceandfire:copper_sword','iceandfire:copper_shovel','iceandfire:copper_pickaxe','iceandfire:copper_axe','iceandfire:copper_hoe' ].forEach(id => event.remove(id))
})
