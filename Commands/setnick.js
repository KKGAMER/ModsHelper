const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "setnick",
  category: "Moderation",
  aliases: ["setnickname", "nick"],
  description: "Change someone's nickname.",
  execute: async (client, message, args) => {
    let perm = message.member.hasPermission("MANAGE_NICKNAMES");
    if (!perm) return message.channel.send("You don't have perms to do that.");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mention the user.");

    let name = args.slice(1).join(" ");
    if (!name) return message.channel.send("Mention the name.");

    user.setNickname(name);

    message.channel.send(`Set nickname for ${user.user.tag}.`);
  }
};