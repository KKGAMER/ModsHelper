const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "Moderation",
  aliases: ["kickuser"],
  description: "Kick a user from the server.",
  usage: "<user> (reason)",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("You don't have perms to use this command");

    let logchannel = message.guild.channels.cache.find(
      ch => ch.name === "modlogs"
    );
    if (!logchannel) return message.channel.send("Can't find log channel. ||Make sure u have a channel named 'modlogs'!||");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("MEntion the user.");
if(user.id === message.author.id) return message.channel.send("You can't kick yourself!");
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Provide the reason.";

    if (user.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "You cant kick an admin!"
      );
    let logembed = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setTitle(`User Kicked | ${user.user.tag}`)
      .addField("Staff", `${message.author}`)
      .addField("Reason", `${reason}`);

    try {
      user.send(
        `You have been kicked from ${message.guild.name} by ${message.author} for ${reason}.`
      );
    } catch (err) {
      console.log(err);
    }

    await user.kick();
    logchannel.send(logembed);
    message.channel.send(`${user} was kicked.`);
  }
};