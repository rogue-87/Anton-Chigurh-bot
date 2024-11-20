import { Interaction } from "discord.js";
import { SlashCommandBuilder } from "discord.js/typings";

declare type Command = {
    data: SlashCommandBuilder;
    execute(interaction: Interaction): Function;
};
