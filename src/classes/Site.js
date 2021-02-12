export class Site {
    constructor(id, param) {
        this.$el = document.getElementById(id);
        this.$modal = param.modalElem;
    }

    render(model) {
        this.$el.innerHTML = '';
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML());
        })
        this.$el.addEventListener('mouseover', this.setHover)
        this.$el.addEventListener('click', this.clickElem.bind(this))
    }

    setHover(event) {
        event.target.classList.add('site-elem');
    }

    clickElem(event) {
        const struct = this.getStruct(event.target);
        this.$modal.show(struct);
    }

    getStruct(elem) {
        const parentElem = elem.parentElement;
        const structElem =
            elem.dataset &&
            parentElem.parentElement.dataset["struct"]
                ? parentElem.parentElement
                : null;
        return {structElem, parentElem, elem}
    }
}