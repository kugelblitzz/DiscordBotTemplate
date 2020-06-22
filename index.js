const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = require('./config/config').Token;


bot.on('ready', () =>
{
    console.info(`Logged in as ${bot.user.tag}!`);

    bot.user.setPresence(
    {
        activity: { name: 'with Kugel-kun' }, status: 'Online'
    })
    .then(console.log).catch(console.error);
});

bot.on('message', msg =>
{
    rawmsg = msg.content.toLowerCase();

    if(msg.author.bot)
        return;

});

bot.login(Token);