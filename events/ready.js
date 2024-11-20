const { Client, Events } = require("discord.js");

/**
 * @callback Execute
 * @param {Client} client
 * @returns {void}
 */

/**
 * @typedef {Object} Ready
 * @property {Events.ClientReady} name
 * @property {boolean} once
 * @property {Execute} execute
 */

/** @type {Ready} */
module.exports = {
    name: Events.ClientReady,
    once: true,
    /** @param {Client} client */
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};
