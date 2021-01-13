const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");
module.exports = {
  name: "volume",
  category: "Music",
  description: "Manage the volume.",
  execute(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("You are not allowed to change the volume.");
    }

    let embed = new MessageEmbed().setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Bot is not playing anything.");
      return message.channel.send(embed);
    }

    if (!args[0]) {
      embed.setAuthor(`The current volume is ${serverQueue.volume}`);
      return message.channel.send(embed);
    }

    if (isNaN(args[0])) {
      embed.setAuthor("Please use numeric value only.");
      return message.channel.send(embed);
    }

    if (args[0] > 100) {
      embed.setAuthor("You cant' increase volume to more than 100.");
      return message.channel.send(embed);
    }

    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    embed.setDescription(`Set Volume to ${args[0]}`);
    embed.setThumbnail(client.user.displayAvatarURL());
    message.channel.send(embed);
  }
};