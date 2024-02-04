import './style/style.css';
import loadHome from "./home";
import loadMenu from './menu';
import loadAbout from './about';
import removeAllChilren from './removeChildren';
import {addColor, removeColor} from './colorManager';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

const content = document.querySelector('.content');

//base page is home
loadHome(content);
//home button looks selected
addColor(homeBtn);

homeBtn.addEventListener('click', () => {
    removeAllChilren(content);
    removeColor(menuBtn, aboutBtn);
    addColor(homeBtn);
    loadHome(content);
});
menuBtn.addEventListener('click', () => {
    removeAllChilren(content);
    removeColor(homeBtn, aboutBtn);
    addColor(menuBtn);
    loadMenu(content);
});
aboutBtn.addEventListener('click', () => {
    removeAllChilren(content);
    removeColor(homeBtn,menuBtn);
    addColor(aboutBtn);
    loadAbout(content);
});