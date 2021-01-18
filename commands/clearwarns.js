const db = require("quick.db");

module.exports = {
  name: "clearwarns",
  aliases: ["cwarns"],
  usage: "cwarns <@user>",
  description: "Reset warns of the mentioned user.",
  execute: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have perms to do this.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Mention the user.");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Bots dont have warns.");
    }


    let warnings = db.get('warn_' + message.guild.id + user.id);

    if (warnings === null) {
      return message.channel.send(
        `${message.mentions.users.first().username} do not have any warnings.`
      );
    }
    await message.channel.send(
      `Cleared ${warnings} for ${message.mentions.users.first().username.tag}`
    );
  }
};