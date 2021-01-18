const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "All the command are displayed here.",
  aliases: ["h"],
  category: "Utility",
  execute(client, message, args) {
    let utility = [];
    let fun = [];
    let moderation = [];
    let prefix = "!";

    if (args[0]) {
      let command = args[0];
      if (client.commands.has(command)) {
        command =
          client.commands.get(command) ||
          client.commands.get(client.aliases.get(command));
        let embed = new MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setThumbnail(message.guild.iconURL())
          .setTitle("Help!")
          .addField(
            "Command Name",
            `${client.capitalize(command.name) || "No Name"}`,
            true
          )
          .addField(
            "Command Description",
            command.description || "No Description",
            true
          )
          .addField("Command Category", command.category || "No Category", true)
          .setColor("00ffff");
        message.channel.send(embed).catch(console.log);
      }
    } else {
      client.commands
        .filter(cmd => cmd.category === "Utility")
        .forEach(cmd => utility.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Fun")
        .forEach(cmd => fun.push(cmd.name));
      client.commands
        .filter(cmd => cmd.category === "Moderation")
        .forEach(cmd => moderation.push(cmd.name));

      let embed = new MessageEmbed()
        .setAuthor("❝Command Section❞", client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(COLOR)
        .setDescription(`♪ Command list of ${client.user.username}.`)
        .addField(
          `➜  Utility Commands`,
          "``" + prefix + utility.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `➜  Fun Commands`,
          "``" + prefix + fun.join("``, " + "``" + prefix) + "``",
          true
        )
        .addField(
          `➜ Moderation Commands`,
          "``" + prefix + moderation.join("``," + "``" + prefix) + "``",
          true
        );
      message.channel.send(embed).catch(console.log);
    }

    /* let command = readdirSync("./commands");

    let i;
    for (i = 0; i < command.length; i++) {
      console.log(command[i]);

      const cmd = client.commands.get(command[i].replace(".js", ""));
      embed.addField(`**${cmd.name}**`, cmd.description, true);
      embed.setFooter(`
Made By 丂ᴀᴍ#2385,Dark Killer#6969 & KK#5021 `);
    }

    message.channel.send(embed);*/
  }
};