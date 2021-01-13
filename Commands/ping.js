const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  category: "Utility",
  description: "Pinging the bot.",
  execute(client, message) {
    let embed = new MessageEmbed()
      .setTitle("Pong!")
      .setColor("00FFFF")
      .setDescription(`Latency: ${client.ws.ping}ms!`);
    return message.channel.send(embed);
  }
};