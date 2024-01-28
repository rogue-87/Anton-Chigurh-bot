// Not finished yet

const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("headsortails")
    .setDescription(
      "Play heads or tails( you will get kicked if you lose :p )"
    ),

//   async execute(interaction) {},
};