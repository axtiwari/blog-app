import { Injectable } from '@angular/core';
import rangy from 'rangy/lib/rangy-core.js';
import rangyClassApplier from 'rangy/lib/rangy-classapplier';
import * as MediumEditor from 'medium-editor';

@Injectable()

export class MediumEditorExtensions {
    private HighlighterButton; // https://github.com/yabwe/medium-editor/blob/master/src/js/extensions/WALKTHROUGH-BUTTON.md

    constructor() {
        rangy.init();

        this.HighlighterButton = MediumEditor.extensions.button.extend({
            name: 'highlighter',

            tagNames: ['mark'],
            contentDefault: '<b>&#128396;</b>',  // default innerHTML of the button
            aria: 'Highlight', // used as both aria-label and title attributes

            init: function () {
                MediumEditor.extensions.button.prototype.init.call(this);

                this.classApplier = rangyClassApplier.createClassApplier('highlight', {
                    elementTagName: 'mark',
                    normalize: true
                });

            },

            handleClick: function (event) {
                this.classApplier.toggleSelection();
                this.base.checkContentChanged();
            }
        });
    }
    createHighligterButton() {
        return new this.HighlighterButton();
    }
}
