import './style/style.css';
import loadHome from "./home";
import loadMenu from './menu';
import loadAbout from './about';
import removeAllChilren from './removeChildren';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

const content = document.querySelector('.content');

//base page is home
loadHome(content);
//home button looks selected
homeBtn.style.color = 'white';

homeBtn.addEventListener('click', () => {
    removeAllChilren(content);
    loadHome(content);
});
menuBtn.addEventListener('click', () => {
    removeAllChilren(content);
    //remove homeButton "selected"
    homeBtn.style.color = '';
    loadMenu(content);
});
aboutBtn.addEventListener('click', () => {
    removeAllChilren(content);
    homeBtn.style.color = '';
    loadAbout(content);
});