import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class purge implements IBotCommand {

    private readonly _command = "purge"

    help(): string {
        return "(Admin Only) Kanaldan istenilen sayıda mesajı siler";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        //Clean-up our message
        msgObject.delete();

        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Özür dilerim ${msgObject.author.username}, bu komut yöneticilere özeldir.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
            return;
        }

        //Make sure that they have said how many messages to delete
        if (!args[0]) {
            msgObject.channel.send(`${msgObject.author.username} mesajların silinmesi için belirli bir sayı vermen gerekiyor.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
            return;
        }


        //Conver args[0] into a number
        let numberOfMessagesToDelete = Number(args[0]);


        //Make sure args[0] is actuall a number
        if (isNaN(numberOfMessagesToDelete)) {
            msgObject.channel.send(`<@${msgObject.author.id}> bu geçerli bir rakam değil.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
            return;
        }

        //Make sure the number is an integer
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);

        //Delete the desired number of messages
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);

    }


}