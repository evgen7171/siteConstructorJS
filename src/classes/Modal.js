import {parseStruct} from "../utils";

export class Modal {
    constructor(id) {
        this.$el = document.getElementById(id);
    }

    // todo сделать вывод модального окна с информацией о структуре
    show(data) {
        let html = '<div></div>';
        const t = parseStruct(data);
        console.log(t)
        // this.$el.insertAdjacentHTML('afterbegin', html);
    }

    hide(){
        // todo сделать скрывание модального окна
    }
}