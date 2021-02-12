import {col, css, row} from "../../../utils";
import {Block} from "../Block";

export class ColumnsBlock extends Block {
    toHTML() {
        const {styles} = this.options;
        const html = this.value.map(item => col(item.toHTML())).join('');
        return row(html, css(styles), 'column')
    }
}