import {TitleBlock} from "./classes/siteComponents/types/TitleBlock";
import {TextBlock} from "./classes/siteComponents/types/TextBlock";
import {ColumnsBlock} from "./classes/siteComponents/structures/ColumnsBlock";
import {ImageBlock} from "./classes/siteComponents/types/ImageBlock";

export function row(content, styles = '', struct = '') {
    return `<div class="row" data-struct="${struct}" style="${styles}">${content}</div>`
}

export function col(content, styles = '') {
    return `<div class="col-sm" style="${styles}">${content}</div>`
}

export function css(styles = {}) {
    if (styles === {}) {
        return '';
    }
    if (typeof styles === 'string') return styles;
    const toString = key => `${key}:${styles[key]}`;
    const css = Object.keys(styles).map(toString).join(';');
    return toKebabCase(css);
}

function toKebabCase(str) {
    const upper = /(?:(?<!\p{Uppercase_Letter})\p{Uppercase_Letter}|\p{Uppercase_Letter}(?!\p{Uppercase_Letter}))/gu;
    return str.replace(upper, "-$&").replace(/^-/, "").toLowerCase();
}

export function block(type, props = []) {
    const textField = prop => {
        return `
          <div class="form-group">
            <input class="form-control form-control-sm mb-2" name="${prop}" placeholder="${prop}">
          </div>  
        `;
    }
    const colorField = props.indexOf('color') === -1 ? '' : `
        <div class="form-group">
            <input type="color" name="color">
        </div>`;
    return `
    <form name="${type}">
      <h5>${type}</h5>
       ${textField('value')}
       ${textField('styles')}
       ${colorField}
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
        `
}

function getClassName(type) {
    return {
        title: TitleBlock,
        text: TextBlock,
        columns: ColumnsBlock,
        image: ImageBlock
    }[type];
}

export function getComponent(type, value = '', styles = {}) {
    if (!type) return false;
    const className = getClassName(type);
    if (!className) {
        throw new Error(`Незарегистрированный компонент ${className}`)
    }
    return new className(value, {styles})
}

export function getQuotientAndRemainder(a, b) {
    const q = Math.floor(a / b);
    const r = a - q * b;
    return {q, r}
}

// todo сделать парсер структуры 0 для получения информации о структурном блоке
export function parseStruct(struct) {
    const {structElem, parentElem, elem} = struct;
    let data;
    if (structElem) {
        data = getChildElem(structElem)
    } else {
        data = getChildElem(elem)
    }
    return data;
}

function getChildElem(elem, level = 0) {
    if (!elem.children.length) {
        return {elem, level};
    }
    const arr = [];
    [...elem.children].forEach(el => {
        arr.push(getChildElem(el, level + 1));
    })
    return arr;
}