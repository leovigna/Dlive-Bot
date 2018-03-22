const Discord = require("discord.js");
const steem = require("steem");
const config = require("./config.json");

const bot = new Discord.Client();

var cmd = require("./cmd-bot.js");
var count = 0;

bot.on("ready", () => {
 console.log("Dlive-Bot Ready !"); 
 bot.user.setGame('Stream Dlive Feed');
 cmd.lunchStream(count);
 count++;
}); 

bot.on("message", async message => {
 const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
 const command = args.shift().toLowerCase()

 if(message.author.bot) return

 if(message.content.indexOf(config.prefix) !== 0) return
 
 if(command === "created") {
  return cmd.getCreatedContent(message);
 }
 
 if(command === "last-post") {
  return cmd.getLastPost(message);
 }

 if(command === "search") {
  return cmd.getSearchContent(message);
 }

 if(command === "bal") {
  return cmd.getWallet(message);
 }

 if(command === "help") {
  return cmd.help(message);
 }

});

bot.login(config.token);

