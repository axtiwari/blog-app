import { Injectable } from '@angular/core';

@Injectable()

export class HtmlParserService {

    getFirstImgSrc(htmlString: string): string {
        const div = document.createElement('div');
        div.innerHTML = htmlString;
        const img = div.querySelector('img');
        return img ? img.src : '';
    }
}


