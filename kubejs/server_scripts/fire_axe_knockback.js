EntityEvents.beforeHurt(event => {
    const player = event.source.player
    if (!player) return
        if (String(player.mainHandItem.id) !== 'kubejs:dragon_axe_fire') return

            const target = event.entity

            let resistance = 0
            try {
                resistance = Number(target.getAttributeValue('minecraft:generic.knockback_resistance'))
            } catch (e) {
                player.tell('resistance error: ' + e)
            }
            if (!(resistance >= 0)) resistance = 0
                if (resistance > 1) resistance = 1

                    const strength = 1.0 * (1 - resistance)
                    if (strength <= 0) return

                        const dx = target.x - player.x
                        const dz = target.z - player.z
                        const len = Math.sqrt(dx * dx + dz * dz) || 1

                        event.server.scheduleInTicks(1, () => {
                            try {
                                target.setMotion(
                                    (dx / len) * strength,
                                                 0.5 * (1 - resistance),
                                                 (dz / len) * strength
                                )
                                target.hurtMarked = true
                            } catch (e) {
                                player.tell('knockback error: ' + e)
                            }
                        })
})
