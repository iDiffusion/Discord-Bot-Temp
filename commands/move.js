module.exports = {
    name: "move",
    aliases: ["move"],
    description: "This command will move members in a certain voice channel to another.",
    permissionsBot: ["MOVE_MEMBERS"],
    permissionsUser: ["MOVE_MEMBERS"],
    channels: ["text"],
    cooldown: 1,
    usage: "move [ch id from] [ch id to]",
    examples: ["move 123456789 987654321"],
    enable: true,
    deleteCmd: 0,
    deleteResp: 3,
    execute(base, prefix, msg, args) {
        try {
            let fromChannel = msg.guild.channels.cache.get(args[0]);
            let toChannel = msg.guild.channels.cache.get(args[1]);
            let mem_array = fromChannel.members.array();
            mem_array.map(user => msg.guild.member(user).edit({channel: toChannel}));
        } catch (e) {
            console.error(e);
            base.utils.noArgsFound(msg, prefix, this, this.deleteResp);
            return;
        }
    }
};
