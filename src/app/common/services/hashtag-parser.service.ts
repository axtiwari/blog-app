import { Injectable } from '@angular/core';

@Injectable()

export class HashtagParserService {
    getHashtags(inputText: string): string[] {
        return inputText.split(' ').filter(item => item.startsWith('#')).map(item => item.slice(1));
    }

    getStringOfHashtags(hashtags: string[]): string {
        return hashtags.map(tag => '#' + tag).join(' ');
    }
}

/* Extract hashtags text from string as an array */
// function getHashTags(inputText) {
//     var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
//     var matches = [];
//     var match;

//     while ((match = regex.exec(inputText))) {
//         matches.push(match[1]);
//     }

//     return matches;
// }

// module.exports = getHashTags;
