import {col, css, row} from "../../../utils";
import {Block} from "../Block";

export class TextBlock extends Block {
    toHTML() {
        const {styles} = this.options;
        return row(col(`<p>${this.value}</p>`), css(styles));
    }
}