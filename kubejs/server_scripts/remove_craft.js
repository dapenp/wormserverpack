ServerEvents.recipes(event => {
//create sa armor
  event.remove({ output: 'create_sa:copper_helmet' })
  event.remove({ input: 'create_sa:copper_helmet' })
  event.remove({ output: 'create_sa:copper_chestplate' })
  event.remove({ input: 'create_sa:copper_chesplate' })
  event.remove({ output: 'create_sa:copper_leggings' })
  event.remove({ input: 'create_sa:copper_leggings' })
  event.remove({ output: 'create_sa:copper_boots' })
  event.remove({ input: 'create_sa:copper_boots' })
//ice and fire tools
  event.remove({ output: 'iceandfire:copper_sword' })
  event.remove({ input: 'iceandfire:copper_sword' })
  event.remove({ output: 'iceandfire:copper_shovel' })
  event.remove({ input: 'iceandfire:copper_shovel' })
  event.remove({ output: 'iceandfire:copper_pickaxe' })
  event.remove({ input: 'iceandfire:copper_pickaxe' })
  event.remove({ output: 'iceandfire:copper_axe' })
  event.remove({ input: 'iceandfire:copper_axe' })
  event.remove({ output: 'iceandfire:copper_hoe' })
  event.remove({ input: 'iceandfire:copper_hoe' })

 //limestone recipe remove
  event.remove({ id: 'tfmg:crushing/limestone' })
  event.remove({ id: 'createbb:limestone_tag_crushing' })
  event.remove({ id: 'createbb:limestone_crushing' })


})
