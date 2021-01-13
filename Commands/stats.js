const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");
const ms = require("ms");

module.exports = {
  name: "stats",
  description: "Get the detailed information about bot.",
  category: "Utility",
  execute(client, message, args) {
    console.log(client.queue.size);
    let embed = new MessageEmbed()
      .setColor(COLOR)
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(`Stats and Info`, client.user.displayAvatarURL())
      .addField("Servers", client.guilds.cache.size, true)
      .addField("Presence", client.user.presence.activities[0].name, true)
      .addField("ID", client.user.id, true)
      .addField("Uptime", ms(client.uptime), true)
      .addField("Status", client.user.presence.status, true)
      .addField("Total Users", client.users.cache.size, true)
      .addField("Developers",`${require('../config.json').developers.join('\n')}`)
      .setFooter(`Requested By: ${message.author.tag}`)
      .setTimestamp();
    console.log(client.user.presence);
    message.channel.send(embed);
  }
};