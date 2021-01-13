const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "Moderation",
  aliases: ["banuser"],
  description: "Ban a user from the server.",
  usage: "<user> (reason)",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("You dont have the perms to ban.");

    let logchannel = message.guild.channels.cache.find(
      ch => ch.name === "modlogs"
    );
    if (!logchannel)
      return message.channel.send(
        "Can't find log channel.||MAke sure u have a channel named modlogs||"
      );

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Mention the user");
if(user.id === message.author.id) return message.channel.send("You can't ban yourself!"); 
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason provided.";

    if (user.hasPermission('ADMINISTRATOR'))
      return message.channel.send("You cant ban an admin!");
    let logembed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setTitle(`User Banned | ${user.user.tag}`)
      .addField("Staff", `${message.author}`)
      .addField("Reason", `${reason}`);

    try {
      user.send(
        `Banned from ${message.guild.name} By ${message.author.tag} For ${reason}`
      );
    } catch (err) {
      console.log(err);
    }

    await user.ban();
    logchannel.send(logembed);
    message.channel.send(`${user} was banned.`);
  }
};