import { fetchImage } from './fecth.js';
import { renderImage,renderButton } from './render.js';





const button = document.querySelector('button');
const body = document.querySelector('body');
const main=()=>{
    fetchImage().then((img)=>{
        console.log(img);
        renderImage(body,img);
    })
    renderButton(button);
}

main();