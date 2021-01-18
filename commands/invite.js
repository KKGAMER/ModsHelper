const { MessageEmbed } = require("discord.js");
const { inviteURL } = require("../config.json");
module.exports = {
  name: "invite",
  description: "Invite the bot to your server.",
  category: "Utility",
  execute(client, message, args) {
    let embed = new MessageEmbed()
      .addField("Add the bot to your server!", `[Invite Here](https://discord.com/oauth2/authorize?client_id=738376663208951898&scope=bot&permissions=8)`,
        true
      )
      .addField('Support Server', `[Join Here](https://discord.gg/K8nXSY4)`, true)
      .setColor('#FFFFFF');

    return message.channel.send(embed);
  }
};