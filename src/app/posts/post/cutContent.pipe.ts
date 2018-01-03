import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'cutContent'
})

export class CutContentPipe implements PipeTransform {
    transform(content: string) {
        let result: string;
        if (content.length < 150) {
            result = content;
        } else {
            result = content.slice(0, 150);
            const index = result.lastIndexOf(' ');
            result = result.slice(0, index) + '...';
        }
        return result;

    }
}
