
EntityEvents.beforeHurt(event => {
    const player = event.source.player
    if (!player) return
        if (player.mainHandItem.id !== 'kubejs:dragon_axe_fire') return

            const target = event.entity

            const resistance = target.getAttribute('minecraft:generic.knockback_resistance')
            if (resistance && resistance.value > 0) return

                const strength = 1.0
                const dx = target.x - player.x
                const dz = target.z - player.z
                const len = Math.sqrt(dx * dx + dz * dz) || 1

                event.server.scheduleInTicks(1, () => {
                    try {
                        target.setMotion(
                            (dx / len) * strength,
                                         0.5,
                                         (dz / len) * strength
                        )
                        target.hurtMarked = true
                    } catch (e) {
                        player.tell('knockback error: ' + e)
                    }
                })
})
