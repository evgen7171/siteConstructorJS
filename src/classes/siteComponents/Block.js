export class Block {
    constructor(value, options = {}) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован');
    }
}