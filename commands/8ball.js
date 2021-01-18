const discord = require("discord.js");

module.exports = {
  name: "8ball",
  category: "Fun",
  aliases: ["eightball"],
  description: "Asl me a question (yes/no) I will answer it.",
  usage: "<question>",
  execute: async (client, message, args) => {
    let replies = ["Yes", "No", "Maybe", "Ask Someone Else", "I Don't Know"];

    let question = args.slice(0).join(" ");
    const embed1 = new discord.MessageEmbed()
      .setColor("00FFFF")
      .setDescription("Ask me the question.");
    if (!question) return message.channel.send(embed1);

    let result = Math.floor(Math.random() * replies.length);

    let embed = new discord.MessageEmbed()
      .setColor("#00FFFF")
      .addField("Your question", `${question}`)
      .addField("My Answer", `${replies[result]}`);
    message.channel.send(embed);
  }
};