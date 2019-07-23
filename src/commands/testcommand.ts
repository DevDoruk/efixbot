import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class testCommand implements IBotCommand {

    private readonly _command = "testcommand"

    help(): string {
        return "Bu komut hiçbir şey yapmıyor. Çok eğlenceli, değil mi?";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        //Let us know it all went well!
        msgObject.channel.send(`<@${msgObject.author.id}> Çalışıyor!`);
    }


}