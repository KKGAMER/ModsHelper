module.exports = {
  name: "server-blacklist",
  aliases: ["sbl"],
  description: "Blacklists a server from using the bot.",
  usage: "<serverid>",
  execute: async (client, message, args) => { 
      const db = require('quick.db')
let owners = [
      "495985498892926976",
      "504635146553524234",
    ];
    if (!owners.includes(message.author.id)) {
      return message.channel.send(`Only the bot-devs can run this command!`);
    }
    let guild = client.guilds.cache.get(args[0])
if (!guild) return message.channel.send('Provide a guild id to blacklist')
if (guild.id === "746366029114114107") return message.channel.send("I can't blacklist my own guild") 
db.set("blguild_" + guild.id, true)

message.channel.send(`Successfully blacklisted ${guild.name}`)

}

}