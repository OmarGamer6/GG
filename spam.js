const Discord = require('discord.js');
const client = new Discord.Client();





client.on('ready', async() => {
var server = "456294249785196555"; // BL8M
var channel = "511268102181355532";// gg
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Darkness Spam ,Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam ,  ')
    },305);
})
