const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "eval",
  description: "Eᴠᴀʟᴜᴀᴛᴇs Cᴏᴍᴍᴀɴᴅs (Bᴏᴛ Oᴡɴᴇʀ Oɴʟʏ!)",
  usage: "eval <code>",
  execute(client, message, args) { 
    let owners = [
      "495985498892926976",
     "504635146553524234",
    ];
    if (!owners.includes(message.author.id)) {
      return message.channel.send(`Only the bot-devs can run this command!`);
    }
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
} 
if (message.content.startsWith("!eval")) {
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
  } 
};