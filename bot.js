const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "R!";



client.on('message', message => {


  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '355058770935545857') return;


if (message.content.startsWith(prefix + 'p')) {
if (message.author.id !== '355058770935545857') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult);
    message.channel.sendMessage(`__**${argresult}**__ : __**تم تغيير الحالة**__ `)
} 

 
if (message.content.startsWith(prefix + 's')) {
if (message.author.id !== '355058770935545857') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult, "http://twitch.tv/Mohamed");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنق`)
} else




if (message.content.startsWith(prefix + 'w')) {
if (message.author.id !== '355058770935545857') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
}

 });


 

 
client.login(process.env.BOT_TOKEN);
