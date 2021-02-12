// const  image = 'http://placeimg.com/640/360/any'
import image from './assets/images/any.jpg'
import {TitleBlock} from "./classes/siteComponents/types/TitleBlock";
import {TextBlock} from "./classes/siteComponents/types/TextBlock";
import {ColumnsBlock} from "./classes/siteComponents/structures/ColumnsBlock";
import {ImageBlock} from "./classes/siteComponents/types/ImageBlock";
import {GridBlock} from "./classes/siteComponents/structures/GridBlock";

export const model = [
    new TitleBlock('Титульник', {
        tag: 'h2',
        styles: {
            textAlign: 'center',
            backgroundColor: 'yellow'
        }
    }),
    new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum inventore minus natus nostrum numquam voluptate.',
        {
            styles: {
                marginLeft: '1px',
                marginTop: '1px',
                fontStyle: 'italic'
            }
        }),
    new GridBlock([
        new ImageBlock(image, {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                justifyContent: 'center'
            },
            imageStyles: {
                width: '200px',
                height: 'auto'
            },
            alt: 'Картинка...'
        }),
        new ImageBlock(image, {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                justifyContent: 'center'
            },
            imageStyles: {
                width: '200px',
                height: 'auto'
            },
            alt: 'Картинка...'
        }),
        new ImageBlock(image, {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                justifyContent: 'center'
            },
            imageStyles: {
                width: '400px',
                height: 'auto'
            },
            alt: 'Картинка...'
        }),
    ], {
        grid: {
            columns: 2,
            rows: 2
        },
        styles: {
            backgroundColor: '#e59898'
        }
    }),
];