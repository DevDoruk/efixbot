"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class didFlutterBeatRN {
    constructor() {
        this._command = "didFlutterBeatRN";
    }
    help() {
        return "Flutter ve React Native - Github yıldız sayısını gösterir";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    getStargazersCount(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch(url).then(res => res.json()).then(json => json['stargazers_count']);
        });
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiURL = 'https://api.github.com/repos';
            const flutterRepoURL = '$apiURL/flutter/flutter';
            const reactnativeRepoURL = '$apiURL/facebook/react-native';
            const flutterStars = yield this.getStargazersCount(flutterRepoURL);
            const rnStars = yield this.getStargazersCount(reactnativeRepoURL);
            const answer = flutterStars > rnStars;
            msgObject.channel.send(`${answer ? "YES!!" : "Nope :("} Flutter: ${flutterStars}, React Native: ${rnStars}`);
        });
    }
}
exports.default = didFlutterBeatRN;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlkRmx1dHRlckJlYXRSTi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9kaWRGbHV0dGVyQmVhdFJOLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixnQkFBZ0I7SUFBckM7UUFFcUIsYUFBUSxHQUFHLGtCQUFrQixDQUFBO0lBNEJsRCxDQUFDO0lBMUJHLElBQUk7UUFDQSxPQUFPLDJEQUEyRCxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxrQkFBa0IsQ0FBQyxHQUFXOztZQUNoQyxPQUFPLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7UUFDMUYsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxNQUFNLE1BQU0sR0FBVyw4QkFBOEIsQ0FBQztZQUN0RCxNQUFNLGNBQWMsR0FBVyx5QkFBeUIsQ0FBQztZQUN6RCxNQUFNLGtCQUFrQixHQUFXLCtCQUErQixDQUFDO1lBRW5FLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQ2xFLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFFakUsTUFBTSxNQUFNLEdBQUcsWUFBWSxHQUFHLE9BQU8sQ0FBQTtZQUVyQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLGFBQWEsWUFBWSxtQkFBbUIsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNqSCxDQUFDO0tBQUE7Q0FHSjtBQTlCRCxtQ0E4QkMifQ==