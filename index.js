const discord = require("discord.js"); // fixed enjoi <<(KK)ok pro darky thanks
const client = new discord.Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"]
}); 
const db = require('quick.db')
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN , PREFIX } = require("./config.json");

//CLIENT EVENTS
client.on("ready", async () => {
client.user.setActivity(`Default Prefix ! | !help `, {
type: "PLAYING"
});
   
 console.log('I am Ready');
});

client.on("warn", info => console.log(info));

client.on("error", console.error);

//DEFINIING
client.commands = new discord.Collection();
client.prefix = PREFIX;
client.queue = new Map();
client.vote = new Map();
client.capitalize = string => {
  let str = "";
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    str +=
      string[i].charAt(0).toUpperCase() +
      string[i].slice(1).toLowerCase() +
      " ";
    if (i == string.length - 1) {
      string = str.split("-");
      str = "";
      for (let i = 0; i < string.length; i++) {
        str += string[i].charAt(0).toUpperCase() + string[i].slice(1) + "-";
        if (i == string.length - 1) {
          return str.slice(0, -2);
        }
      }
    }
  }
};

//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file =>
  file.endsWith(".js")
);
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file));
  client.commands.set(command.name, command);
} //LOADING DONE

//WHEN SOMEONE MESSAGE 
client.on("message", async message => {
    if(message.author.bot) return; 
    const prefix1 = await db.fetch(`prefix_${message.guild.id}`)
  if (message.author.bot) return;
  if (!message.guild) return; 
  if(prefix1 !== null) {
      if (message.content === "<@738376663208951898>") return message.channel.send('My prefix for the server is ``' + prefix1 + '``.'); 
if (message.content === "<@!738376663208951898>") return message.channel.send('My prefix for the server is ``' + prefix1 + '``.');
if (message.content.startsWith(prefix1
 )) { 
    //IF MESSSAGE STARTS WITH MINE BOT PREFIX
 
    const args = message.content
      .slice(prefix1.length)
      .trim()
      .split(/ +/); //removing prefix from args
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    } 
    let owners = [
"495985498892926976"
]
if (!owners.includes(message.author.id)) {
    let bl = await db.fetch(`bl_${message.author.id}`)
if(bl === true) return message.channel.send("You didn't follow our ToS so you are blacklisted from using this bot, this means that you can no longer use any commands for our bot. Please contact developers for any further queries.")
 let bls = await db.fetch(`blguild_${message.guild.id}`)
if(bls === true) return message.channel.send("Your server didn't follow our ToS so its blacklisted from using this bot, this means that you can no longer use any commands for our bot in this server. Please contact developers for any further queries.")
}
    try {
      //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args);
      //COMMAND LOGS
      console.log(
        `${message.guild.name}: ${message.author.tag} Used ${
          client.commands.get(command).name
        } in #${message.channel.name}`
      );
      const o = client.channels.cache.get('747669450508992605')
      const embed = new discord.MessageEmbed()
.setTitle('Bot command used')
.setDescription(`${message.guild.name} : ${message.author.tag} used ${client.commands.get(command).name} in ${message.channel.name}`)
.setColor('#FFFFFF')
.setThumbnail(message.author.avatarURL())
.setTimestamp();
      o.send(embed)
    } catch (err) {
      //IF IT CATCH ERROR 
      console.log(err);
      console.log(message.content);
      const o = client.channels.cache.get('747671663323250729')
const embed = new discord.MessageEmbed()
.setTitle('An error occured while using a command')
.setDescription(err)
.setColor('FFFFFF')
.setTimestamp()
o.send(embed)
      message.reply("I'm getting error on using this command! Please contact developers!");
 

  }
  } 
  } else {
if (message.content === "<@738376663208951898>") return message.channel.send('My prefix for the server is ``!``.'); 
if (message.content === "<@!738376663208951898>") return message.channel.send('My prefix for the server is ``!``.');
if(prefix1 !== null) return;
  if (message.content.startsWith(PREFIX
 )) { 
    //IF MESSSAGE STARTS WITH MINE BOT PREFIX
 
    const args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/); //removing prefix from args
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    } 
    let owners = [
"495985498892926976"
]
if (!owners.includes(message.author.id)) {
    let bl = await db.fetch(`bl_${message.author.id}`)
if(bl === true) return message.channel.send("You didn't follow our ToS so you are blacklisted from using this bot, this means that you can no longer use any commands for our bot. Please contact developers for any further queries.")
 let bls = await db.fetch(`blguild_${message.guild.id}`)
if(bls === true) return message.channel.send("Your server didn't follow our ToS so its blacklisted from using this bot, this means that you can no longer use any commands for our bot in this server. Please contact developers for any further queries.")
}
    try {
      //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args);
      //COMMAND LOGS
      console.log(
        `${message.guild.name}: ${message.author.tag} Used ${
          client.commands.get(command).name
        } in #${message.channel.name}`
      );
      const o = client.channels.cache.get('747669450508992605')
      const embed = new discord.MessageEmbed()
.setTitle('Bot command used')
.setDescription(`${message.guild.name} : ${message.author.tag} used ${client.commands.get(command).name} in ${message.channel.name}`)
.setColor('#FFFFFF')
.setThumbnail(message.author.avatarURL())
.setTimestamp();
      o.send(embed)
    } catch (err) {
      //IF IT CATCH ERROR 
      console.log(err);
      console.log(message.content);
      const o = client.channels.cache.get('747671663323250729')
const embed = new discord.MessageEmbed()
.setTitle('An error occured while using a command')
.setDescription(err)
.setColor('FFFFFF')
.setTimestamp()
o.send(embed)
      message.reply("I'm getting error on using this command! Please contact developers!");
    
  }
  }

else if(message.content.startsWith("<@738376663208951898>"
 )) {
    //IF MESSSAGE STARTS WITH MINE BOT PREFIX
    
    const args = message.content
      .slice('<@738376663208951898>'.length)
      .trim()
      .split(/ +/); //removing prefix from args
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    } 
    let owners = [
"495985498892926976"
]
if (!owners.includes(message.author.id)) {
    let bl = await db.fetch(`bl_${message.author.id}`)
if(bl === true) return message.channel.send("You didn't follow our ToS so you are blacklisted from using this bot, this means that you can no longer use any commands for our bot. Please contact developers for any further queries.")
 let bls = await db.fetch(`blguild_${message.guild.id}`)
if(bls === true) return message.channel.send("Your server didn't follow our ToS so its blacklisted from using this bot, this means that you can no longer use any commands for our bot in this server. Please contact developers for any further queries.")
}
    try {
      //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args);
      //COMMAND LOGS
      console.log(
        `${message.guild.name}: ${message.author.tag} Used ${
          client.commands.get(command).name
        } in #${message.channel.name}`
      );
      const o = client.channels.cache.get('747669450508992605')
      const embed = new discord.MessageEmbed()
.setTitle('Bot command used')
.setDescription(`${message.guild.name} : ${message.author.tag} used ${client.commands.get(command).name} in ${message.channel.name}`)
.setColor('#FFFFFF')
.setThumbnail(message.author.avatarURL())
.setTimestamp();
      o.send(embed)
    } catch (err) {
      //IF IT CATCH ERROR 
      console.log(err);
      console.log(message.content);
      const o = client.channels.cache.get('747671663323250729')
const embed = new discord.MessageEmbed()
.setTitle('An error occured while using a command')
.setDescription(err)
.setColor('FFFFFF')
.setTimestamp()
o.send(embed)
      message.reply("I'm getting error on using this command! Please contact developers!");
    
  }
  }
else if(message.content.startsWith("<@!738376663208951898>"
 )) {
    //IF MESSSAGE STARTS WITH MINE BOT PREFIX
    
   const args = message.content
      .slice('<@!738376663208951898>'.length)
      .trim()
      .split(/ +/); //removing prefix from args
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    } 
    let owners = [
"495985498892926976"
]
if (!owners.includes(message.author.id)) {
    let bl = await db.fetch(`bl_${message.author.id}`)
if(bl === true) return message.channel.send("You didn't follow our ToS so you are blacklisted from using this bot, this means that you can no longer use any commands for our bot. Please contact developers for any further queries.")
 let bls = await db.fetch(`blguild_${message.guild.id}`)
if(bls === true) return message.channel.send("Your server didn't follow our ToS so its blacklisted from using this bot, this means that you can no longer use any commands for our bot in this server. Please contact developers for any further queries.")
}
    try {
      //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args);
      //COMMAND LOGS
      console.log(
        `${message.guild.name}: ${message.author.tag} Used ${
          client.commands.get(command).name
        } in #${message.channel.name}`
      );
      const o = client.channels.cache.get('747669450508992605')
      const embed = new discord.MessageEmbed()
.setTitle('Bot command used')
.setDescription(`${message.guild.name} : ${message.author.tag} used ${client.commands.get(command).name} in ${message.channel.name}`)
.setColor('#FFFFFF')
.setThumbnail(message.author.avatarURL())
.setTimestamp();
      o.send(embed)
    } catch (err) {
      //IF IT CATCH ERROR 
      console.log(err);
      console.log(message.content);
      const o = client.channels.cache.get('747671663323250729')
const embed = new discord.MessageEmbed()
.setTitle('An error occured while using a command')
.setDescription(err)
.setColor('FFFFFF')
.setTimestamp()
o.send(embed)
      message.reply("I'm getting error on using this command! Please contact developers!");
    }
  
  } 
  }
}); 
client.on("guildMemberAdd", async member => { 
    let bls = await db.fetch(`blguild_${member.guild.id}`)
if(bls === true) return;
    const we = await db.fetch(`we_${member.guild.id}`) 
    if (we === true) {
    const ws = await db.fetch(`ws_${member.guild.id}`)
    if (ws !== true) return;
    const channel1 = await db.fetch(`wc_${member.guild.id}`)
    if (!channel1) return;
    const channel = member.guild.channels.cache.get(channel1)
    const embed = new discord.MessageEmbed()
    .setTitle('Member joined!')
    .setDescription('Welcome <@' + member.user.id + '> to the server! Hope you enjoy the stay in the server. Do agree to follow our rules.')
    .setColor("#FFFFFF")
    .setTimestamp()
    .setThumbnail(member.user.avatarURL())
    channel.send(embed)
    }
    else {
        return;
    }
}
)
//WELCOME USER COMMAND!!
client.on("guildMemberRemove", async member => { 
    let bls = await db.fetch(`blguild_${member.guild.id}`)
if(bls === true) return;
    const we = await db.fetch(`le_${member.guild.id}`) 
    if (we === true) {
    const ws = await db.fetch(`ls_${member.guild.id}`)
    if (ws !== true) return;
    const channel1 = await db.fetch(`lc_${member.guild.id}`)
    if (!channel1) return;
    const channel = member.guild.channels.cache.get(channel1)
    const embed = new discord.MessageEmbed()
    .setTitle('Member Left!')
    .setDescription(member.user.username + ' just left the server! We hope to see you again someday.')
    .setColor("#FFFFFF")
    .setTimestamp()
    .setThumbnail(member.user.avatarURL())
    channel.send(embed) 
    }
    else {
        return;
    }
}
)


//DONT DO ANYTHING WITH THIS TOKEN lol
client.login(TOKEN);
