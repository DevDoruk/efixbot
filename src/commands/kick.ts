import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class kick implements IBotCommand {

    private readonly _command = "kick"

    help(): string {
        return "Etiketlenen kullanıcıyı atar";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;

        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`İyi deneme <@${msgObject.author.id}> fakat bunun için yetkin yok!`)
            return;
        }
        if (!mentionedUser) {
            msgObject.channel.send(`Kusura bakma <@${msgObject.author.id}>! Bu kullanıcı adına sahip birini bulamadım.`)
                .then(msg => {
                    (msg as Discord.Message).delete(8000);
                });
            return;
        }
        msgObject.delete(0);

        msgObject.guild.member(mentionedUser).kick(kickLog)
            .then(console.log)
            .catch(console.error)
    }


}