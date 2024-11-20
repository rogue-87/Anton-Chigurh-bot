const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
const { config } = require("dotenv");
const { request } = require("node:http");

config({ path: "./.env" });

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

// NOTE: Loads Commands
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if ("data" in command && "execute" in command) {
            client.commands.set(command.data.name, command);
        }
    }
}

// NOTE: Loads Events
const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith("js"));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.login(process.env["BOT_TOKEN"]);
