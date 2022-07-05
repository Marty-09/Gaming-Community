const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("OTkzNTc5ODgxMzYxMzI2MTcy.GFfq4f.J1YWrvl2cklYlSaHm19X6LLi0GdRtomyzHjFCw")

client.on("ready", () => {
    console.log("Bot Online!")
})

client.on("messageCreate", (message) => {
    if(message.content == "€risolviilcubo") {
        message.channel.send("Ecco:https://media4.giphy.com/media/2CV88JdrUCOYT5Ec8j/giphy.gif")
    }

    if(message.content == "€embed") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Titolo embed")
            .setDescription(`${message.author.username} ha scritto il messaggio`)
            .setThumbnail("https://cdn.discordapp.com/attachments/990656526924533830/993788659474116689/static_3.png")

    }   

        message.channel.send({ embeds: [embed] })
    }
)

