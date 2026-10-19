
const lightningBonus = {
    'iceandfire:fire_dragon': 4,
    'iceandfire:ice_dragon': 4
}

const iceBonus = {
    'iceandfire:fire_dragon': 8
}

const fireBonus = {
    'iceandfire:ice_dragon': 8
}

EntityEvents.beforeHurt(event => {
    const player = event.source.player
    if (!player) return

        // Lightning Dragon Axe
        if (player.mainHandItem.id === 'kubejs:dragon_axe_lightning') {
            if (player.getAttackStrengthScale(0) > 0.9) {
                const target = event.entity

                event.server.runCommandSilent(
                    `execute in ${event.level.dimension} run summon minecraft:lightning_bolt ${target.x} ${target.y} ${target.z}`
                )
            }

            const extra = lightningBonus[event.entity.type]
            if (extra) {
                event.damage += extra
            }
        }

        // Ice Dragon Axe
        if (player.mainHandItem.id === 'kubejs:dragon_axe_ice') {
            if (player.getAttackStrengthScale(0) > 0.9) {
                event.entity.potionEffects.add(
                    'minecraft:slowness', 100, 2
                )
                event.entity.potionEffects.add(
                    'iceandfire:frozen', 100, 0
                )
                event.entity.potionEffects.add(
                    'minecraft:mining_fatigue', 100, 2
                )
            }

            const extra = iceBonus[event.entity.type]
            if (extra) {
                event.damage += extra
            }
        }

        // Fire Dragon Axe
        if (player.mainHandItem.id === 'kubejs:dragon_axe_fire') {
            const target = event.entity

            event.server.runCommandSilent(
                `execute in ${event.level.dimension} run data merge entity ${target.uuid} {Fire:100s}`
            )

            const extra = fireBonus[target.type]
            if (extra) {
                event.damage += extra
            }
        }
})
