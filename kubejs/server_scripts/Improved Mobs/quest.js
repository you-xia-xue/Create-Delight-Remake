//想用任务增加难度系数的，在奖励里加一个自定义，然后加上标签：rank_难度等级，比如rank_1就会增加一级

/**
 * 
 * @param {Internal.Player} player 
 * @param {number} value 
 */
function UpdateRank(player, value) {
    if (player.persistentData.get("disableRankChange"))
        return
    value = (GetPlayerDifficulty(player) + value) < 0 ? -GetPlayerDifficulty(player) : value
    player.getServer().runCommandSilent(`/improvedmobs difficulty player ${player.username} add ${value}`)
    if (value < 0)
        player.tell(`难度降低了${-value}！`)
    else
        player.tell(`难度提升了${value}！`)
}
/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @returns {number}
 */
function GetPlayerDifficulty(player) {
    return player.nbt.getCompound("ForgeCaps").getCompound("improvedmobs:player_cap").getFloat("IMDifficulty")
}

FTBQuestsEvents.customReward(e => {
    
    e.reward.tags.forEach(s => {
        if (s.split("_")[0] == "rank") {
            UpdateRank(e.player, s.split("_")[1])
        }
        else if (s.split("_")[0] == "unrank") {
            UpdateRank(e.player, -s.split("_")[1])
        }
        else if (s == "change_rank_change_state") {
            let disableRankChange = e.player.persistentData.get("disableRankChange")
            if (disableRankChange == null)
                e.player.persistentData.putBoolean("disableRankChange", true)
            else
                e.player.persistentData.putBoolean("disableRankChange", !disableRankChange)
            if (disableRankChange)
                e.player.tell("以关闭难度变化！")
            else
                e.player.tell("已开启难度变化！")
        }

    })
})