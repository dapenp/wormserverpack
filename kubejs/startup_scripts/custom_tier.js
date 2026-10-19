
ItemEvents.toolTierRegistry(event => {
    event.add('dragon_bone', tier => {
        tier.uses = 2000
        tier.speed = 9
        tier.enchantmentValue = 10
        tier.repairIngredient = 'iceandfire:dragonbone'
    })
})
