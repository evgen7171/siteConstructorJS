import {col, css, getQuotientAndRemainder, row} from "../../../utils";
import {Block} from "../Block";

export class GridBlock extends Block {
    toHTML() {
        const {styles, grid} = this.options;
        if (!grid) return '';
        let html1 = '';
        let html2 = '';
        const {q, r} = getQuotientAndRemainder(this.value.length, grid.rows);
        for (let i = 0; i < q; i++) {
            for (let j = 0; j < grid.columns; j++) {
                html1 += col(this.value[i * grid.columns + j].toHTML());
            }
        }
        for (let j = 0; j < r; j++) {
            html2 += col(this.value[q * grid.columns + j].toHTML());
        }
        return row(html1, css(styles), 'grid') + row(html2, css(styles), 'grid');
    }
}