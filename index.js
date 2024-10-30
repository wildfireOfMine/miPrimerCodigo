console.log('Estoy listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

var fortunes = [
	"Quizás",
	"No",
	"Sí",
];


bot.on('message', (message) => {
	if (message.content === 'Hola') {
		message.channel.sendChannel('HOLA');
	}

	if (message.content === 'Holaa') {
		message.react('🤔')
	}

	if (message.content === 'Espejo') {
		message.reply(message.author.avatarURL);
	}
	if (message.content === 'Elecciones')
		message.react('👍')
		.then(() => message.react('👎'))
		.then(() => message.react('🤷'))
}); 

bot.login(/*Token*/);
