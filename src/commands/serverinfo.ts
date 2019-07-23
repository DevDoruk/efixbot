import * as Discord from "discord.js";
import { IBotCommand } from "../api";
import { url } from "inspector";

export default class serverinfo implements IBotCommand {

    private readonly _command = "serverinfo"

    help(): string {
        return "Sunucu bilgisini gönderir";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle("Oh Crap! Discord Sunucusu")
            .setFooter("Çok havalı bir Discord sunucusu, değil mi?")
            .setImage("https://media.giphy.com/media/QLvRBqfLXCphu/giphy.gif")
            .setDescription("Sunucumuza hoş geldin!")
            .addField("Kullanıcı sayısı:", `${msgObject.guild.memberCount}`)

        msgObject.channel.send(embed)
            .catch(console.error);
    }
}

