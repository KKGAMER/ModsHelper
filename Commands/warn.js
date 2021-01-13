const Discord = require("discord.js");
const db = require('quick.db')
module.exports = {
  name: "warn",
  category: "Moderation",
  aliases: ["warnuser"],
  description: "Warn a user in the server.",
  usage: "<user> (reason)",
  execute: async (client, message, args) => { 
      if(message.author.bot) return;
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return('You cant do this')
      const user = message.mentions.members.first()
      if(!user) return message.channel.send('Please mention the person to warn')
      if(user.hasPermission('ADMINISTRATOR')) return message.channel.send('You cant warn an admin')
      const member = message.guild.members.cache.get(user.id)
      db.add('warn_' + message.guild.id + user.id, 1) 
      let reason =  args.slice(1).join(" ");
    if (!reason) reason = "No reason provided.";
      const embed = new Discord.MessageEmbed() 
      .setTitle('Warned')
      .setDescription(`Warned ${message.members.mentions.first().username} for ${reason}`)
      .setColor('#FFFFF')
      member.send(`You were warned in ${message.guild.name} by ${message.author.tag} for ${reason}`)
  }
}