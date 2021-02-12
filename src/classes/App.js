import {Site} from "./Site";
import {Sidebar} from "./Sidebar";
import {Modal} from "./Modal";

export class App {
    constructor(model) {
        this.model = model;
        this.modal = new Modal('app');
    }
    init(){
        const site = new Site('site', {modalElem: this.modal});

        site.render(this.model);

        const updateCallback = newBlock => {
            this.model.push(newBlock);
            site.render(this.model);
        }

        new Sidebar('sidebar', updateCallback, {modalElem: this.modal});
    }
}