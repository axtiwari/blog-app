import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'stripHtml'
})

export class StripHtmlPipe implements PipeTransform {
    transform(valueHtml: string) {
        const div = document.createElement('div');
        div.innerHTML = valueHtml;
        const text = div.textContent || '';
        return text;
    }
}
