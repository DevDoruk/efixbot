import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class ban implements IBotCommand {

    private readonly _command = "ban"

    help(): string {
        return "Etiketlenen kullanıcıyı banlar";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete()
            .catch(console.error);


        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`İyi deneme ${msgObject.author.username} fakat bunun için yetkin yok!`)
                .then(msg => {
                    (msg as Discord.Message).delete(8000)
                        .catch(console.error);
                });
            return;
        }
        if (!mentionedUser) {
            msgObject.channel.send(`Kusura bakma <@${msgObject.author.id}>! Bu kullanıcı adına sahip birini bulamadım.`)
                .then(msg => {
                    (msg as Discord.Message).delete(8000)
                        .catch(console.error);
                    return;
                })
            msgObject.delete(0);

            msgObject.guild.member(mentionedUser).ban(banLog)
                .then(console.log)
                .catch(console.error)
        }


    }
}