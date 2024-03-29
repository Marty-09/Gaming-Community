const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] }
)


client.login(process.env.token)

client.on("ready", () => {
    let embed = new Discord.MessageEmbed()
    .setTitle("BOT ONLINE")
    .setDescription("il tuo bot è online")
    .setColor("#0099ff")
    client.channels.cache.get("984551278631858236").send({ embeds: [embed] })
        console.log("Il bot è online");
    client.user.setActivity('!help', { type: 'PLAYING'}); 
})

client.on("messageCreate", message => {
    if (message.content == "!serverinfo") {
        let server = message.guild;
        let embed = new Discord.MessageEmbed()
            .setTitle(server.name)
            .setDescription("Tutte le info su questo server")
            .setThumbnail(server.iconURL())
            .addField("Owner", client.user.cache.get(server.ownerId).username, true)
            .addField("Server id", server.id, true)
            .addField("Members", server.channels.cache.size.toString())
            .addField("Channels", server.channels.cache.size.toString())
            .addField("Server created", server.createdAT.toDateString(), true)
            .addField("Boost level", "Level " + (server.premiumTier != "NONE" ?  server.premiumTier : 0) + " (Boost: " + server.premiumSubscriptionCount + ")", true )
        message.channel.send({ embed: [embed] })
    }
})

client.on("messageCreate", message => {
    if (message.content.startWith("!kick")) {
        let utente = message.mention.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.kickable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.kick()
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle("utente kickato")
                    .setDescription("Utente kickato da uno staffer")
                message.channel.send({ embed: [embed] })
            })
    }
})

client.on("messageCreate", message => {
    if (message.content.startWith("!userinfo")) {
        let utente
        if (message.content == "!userinfo") {
            utente = message.member;
        }
        else {
            utente = message.mention.members.first();
        }
        if (!utente) {
            return message.channel.send("Non ho trovato questo utente")
        }
        let elencoPermessi = "";
        if (utente.permission.has("ADMINISTRATOR")) {
            elencoPermessi = "👑 ADMINISTRATOR";
        }
        let embed = new Discord.MessageEmebed()
        .setTitle(utente.user.tag)
        .setDescription("Tutte le info di questo utente")
        .setThumbnail(utente.user.displayAvatarURL())
        .addField("User id", utente.user.id, true)
        .addField("Status", utente.presence ? utente.presence.status : "offline", true)
        .addField("Is a bot?", utente.user.bot ? "Yes" : "No", true)
        .addField("Account created", utente.user.createdAt.toDateString(), true)
        .addField("Joined this server", utente.joinedAt.toDateString(), true)
        .addField("Permissions", elencoPermessi)
        .addField("Roles", utente.roles.cache.map(ruolo => ruolo.name).join("\n"))
    message.channel.send({ embed: [embed] })
    }
})

client.on("messageCreate", message => {
    if (messsage.content.startWith("!mute")) {
        let utente = message.mentions.member.first();
        if (!message.member.permission.has("MANAGE_ROLES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        utente.roles.add("idRuolo")
        let embed = new Discord.MessageEmbed()
            .setTitle("Utente mutato")
            .setDescription("Utente Mutato")
        message.channel.send({ embed: [embed] })
    }
})


client.on("messageCreate", message => {
    if (message.content.startWith("!unmute")) {
        let utente = message.mention.members.first();
        if (!message.member.permissions.has("MANAGE_ROLES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        utente.roles.remove("idRuolo")
        let embed = new Discord.MessageEmbed()
            .setTitle("Utente Smutato")
            .setDescription("Utente Smutato")
        message.channel.send({ embed: [embed] })
    }
})

client.on("messageCreate", message => {
    if (message.content.startsWith("!ban")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.bannable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.ban()
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle("Utente bannato")
                    .setDescription("Ho bannato l'utente")
                message.channel.send({ embeds: [embed] })
            })
        }
})