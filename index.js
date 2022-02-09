const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Logged in as Gitshock Finance Bot')
})

client.on("messageCreate", (message) => {
    if (message.content.includes("Contract"))
    {
        message.reply("We will announce it soon")
    }
})

client.on("messageCreate", (message) => {
    if (message.content.includes("contract"))
    {
        message.reply("We will announce it soon")
    }
})

client.login(process.env.TOKEN)