const { Client, Events, GatewayIntentBits, CommandInteraction, SlashCommandBuilder } = require('discord.js');
const { PythonShell } = require('python-shell');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });
const fs = require('fs');

let msgData = fs.readFileSync("data.txt",'utf-8');
console.log(msgData);
let msgLength = msgData.split("\n").length;
console.log(msgLength);


client.once(Events.ClientReady, c => {
	console.log(`Ready! (${c.user.tag})`); // 起動した時に"Ready!"とBotの名前をコンソールに出力する
});


client.on(Events.MessageCreate, message => {
   
    if (message.author.bot) return; // Botには反応しないようにする
    if (message.content.includes("なんか喋れ")) {
        msg = msgData.split("\n");
        var num = Math.floor(Math.random() * msgLength) -1;
        console.log(msg[num]);
        message.channel.send(msg[num]);
		
	}

    else if (message.content.includes("捏造")) {
    console.log("捏造中");
    PythonShell.run('gen.py').then((res) => {
        console.log(res);
        message.channel.send(`${res}`);
})
    console.log("捏造完了");
    }
});

client.login(fs.readFileSync(".login_token.txt",'utf-8'));