import {col, css, row} from "../../../utils";
import {Block} from "../Block";

export class TitleBlock extends Block {
    toHTML() {
        const tag = this.options.tag || 'h1';
        return row(col(`<${tag}>${this.value}</${tag}>`), css(this.options.styles));
    }
}