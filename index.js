const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot Online!")
})

    if(message.content == "€embed") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Titolo embed")
            .setDescription(`${message.author.username} ha scritto il messaggio`)
            .setThumbnail("https://cdn.discordapp.com/attachments/990656526924533830/993788659474116689/static_3.png")

    }

client.on("messageCreate", message => {
    var parolacce = ["cazzo", "merda", "stronzo", "coglione"]
    var trovata = false;

    parolacce.forEach(parola => {
        if ( message.content.includes(parola)) {
            trovata = true;
        }
    })

    if (trovata) {
        message.delete();
        var embed = new Discord.MessageEmbed()
            .setTitle("Hai detto una parolaccia")
            .setDescription("Non dovevi dire queste parole ora smettila, potresti infastidire qualcuno")

        message.channel.send({ embeds: [embed] })    
    }
})
