const discord = require("discord.js");

module.exports = {
  name: "addrole",
  category: "Moderation",
  aliases: ["addroles"],
  description: "Add a role to a user.",
  usage: "<user> <role>",
  execute: async (client, message, args) => {
    let perm = message.member.hasPermission("MANAGE_ROLES");
    if (!perm) return message.channel.send("You don't have the perms to use this.");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mention the user.");

    let role = message.mentions.roles.first();
    if (!role) return message.channel.send("Mention the role.");

    let embed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setDescription(`${user}, +${role}`);

    user.roles.add(role);
    message.channel.send(embed);
  }
};