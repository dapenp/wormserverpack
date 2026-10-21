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

// Блискавична і льодяна сокири (тільки коли б'є гравець)
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
                event.entity.potionEffects.add('minecraft:slowness', 100, 2)
                event.entity.potionEffects.add('iceandfire:frozen', 100, 0)
                event.entity.potionEffects.add('minecraft:mining_fatigue', 100, 2)
            }

            const extra = iceBonus[event.entity.type]
            if (extra) {
                event.damage += extra
            }
        }
})

// Fire Dragon Axe (працює для будь-кого, хто б'є: гравець, зомбі тощо)
EntityEvents.beforeHurt(event => {
    const attacker = event.source.actual
    if (!attacker) return

        let held
        try {
            held = attacker.mainHandItem
        } catch (e) {
            return
        }
        if (!held || String(held.id) !== 'kubejs:dragon_axe_fire') return

            const target = event.entity

            // підпал: пробуємо методи по черзі
            let ignited = false
            try {
                target.setRemainingFireTicks(100) // 5 секунд
                ignited = true
            } catch (e) {}

            if (!ignited) {
                try {
                    target.igniteForSeconds(5)
                    ignited = true
                } catch (e) {}
            }

            if (!ignited && !target.player) {
                // запасний варіант, лише для не-гравців
                event.server.runCommandSilent(
                    `execute in ${event.level.dimension} run data merge entity ${target.uuid} {Fire:100s}`
                )
            }

            const extra = fireBonus[target.type]
            if (extra) event.damage += extra
})
