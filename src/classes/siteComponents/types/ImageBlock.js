import {css, row} from "../../../utils";
import {Block} from "../Block";

export class ImageBlock extends Block {
    toHTML() {
        const {imageStyles, alt = '', styles} = this.options;
        return row(`<img src="${this.value}" style="${css(imageStyles)}" alt="${alt}">`, css(styles));
    }
}