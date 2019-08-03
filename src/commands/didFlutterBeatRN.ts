import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class didFlutterBeatRN implements IBotCommand {

    private readonly _command = "didflutterbeatrn"

    help(): string {
        return "Flutter ve React Native - Github yıldız sayısını gösterir";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async getStargazersCount(url: string) {
        return await fetch(url).then(res => res.json()).then(json => json['stargazers_count'])
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        const apiURL: string = 'https://api.github.com/repos';
        const flutterRepoURL: string = '$apiURL/flutter/flutter';
        const reactnativeRepoURL: string = '$apiURL/facebook/react-native';

        const flutterStars = await this.getStargazersCount(flutterRepoURL)
        const rnStars = await this.getStargazersCount(reactnativeRepoURL)

        const answer = flutterStars > rnStars
        //Let us know it all went well!
        msgObject.channel.send(`${answer ? "YES!!" : "Nope :("} Flutter: ${flutterStars}, React Native: ${rnStars}`);
    }


}