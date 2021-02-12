import {block, getComponent} from "../utils";

export class Sidebar {
    constructor(id, updateCallback, param) {
        this.$el = document.getElementById(id);
        this.$modal = param.modalElem;
        this.update = updateCallback;
        this.init();
    }

    init() {
        this.$el.insertAdjacentHTML('beforeend', this.template);
        this.$el.insertAdjacentHTML('beforeend', this.formButton);
        this.$el.addEventListener('submit', this.submit.bind(this));
    }

    get template() {
        return [
            block('text', ['color']),
            block('title'),
            block('image')
        ].join('');
    }

    get formButton() {
        return `
            <form name="public">
                 <button type="submit" class="btn btn-primary btn-sm">Опубликовать</button>  
            </form>`;
    }

    handleFields(elem) {
        const value = elem.value.value;
        const styles = elem.styles.value;
        const color = elem.color.value;
        elem.value.value = '';
        elem.styles.value = '';
        elem.color.value = '#000000';
        return {value, styles: styles + ';color:' + color}
    }

    submit(event) {
        event.preventDefault();
        const elem = event.target;
        if (elem.name === 'public') {
            this.public();
        } else {
            this.add(elem);
        }

    }

    public() {
        console.log('site')
    }

    add(elem) {
        const {value, styles} = this.handleFields(elem);
        const type = elem.name;
        const newBlock = getComponent(type, value, styles);
        if (newBlock) {
            this.update(newBlock);
        }
    }
}