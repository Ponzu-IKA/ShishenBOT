const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! (${c.user.tag})`); // 起動した時に"Ready!"とBotの名前をコンソールに出力する
});

client.on(Events.MessageCreate, message => {
    if (message.author.bot) return; // Botには反応しないようにする
    if (message.guild.id !== "利用するサーバーId") return; // 指定のサーバー以外では動作しないようにする
    if (message.content.includes("Discord")) {
        message.channel.send("こんにちは！Discord Botです。");
    }
});

client.login("MTA1MzczMjcwNzY4MDY2OTcxNg.GKXb02.XOKNDB7wzE3T7VVLlQ5rOFdkUXCOuse0fMo7Kc");