// import './style.css';
// import totImg from './tater_tots.jpg';
import loadHome from './home.js';
import loadContact from './contact.js';
import loadMenu from './menu.js';

function clearElement(el) {
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
}

// function handleTabClick(e) {
//     console.log(`this is: ${this} and e.target is: ${e.target}`);
//     clearElement(mainDiv);
//     mainDiv.appendChild(loadHome());
// }

export default function loadPage() {
    const body = document.querySelector('body');

    const tabDiv = document.createElement('div');
    tabDiv.id = 'tab-div';

    const mainDiv = document.createElement('div');
    const tabs = document.createElement('ul');

    const homeTab = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.innerHTML = "Home";
    homeLink.addEventListener("click", (e) => {
        // console.log(`this is: ${this} and e.target is: ${e.target}`);
        clearElement(mainDiv);
        mainDiv.appendChild(loadHome());
    });
    // homeLink.addEventListener("click", handleTabClick);
    homeTab.appendChild(homeLink);


    const menuTab = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.innerHTML = "Menu";
    // menuLink.addEventListener("click", handleTabClick);
    menuLink.addEventListener("click", (e) => {
        // console.log(`this is: ${this} and e.target is: ${e.target}`);
        clearElement(mainDiv);
        mainDiv.appendChild(loadMenu());
    });
    menuTab.appendChild(menuLink);


    const contactTab = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.innerHTML = "Contact";
    // contactLink.addEventListener("click", handleTabClick);
    contactLink.addEventListener("click", (e) => {
        // console.log(`this is: ${this} and e.target is: ${e.target}`);
        clearElement(mainDiv);
        mainDiv.appendChild(loadContact());
    });
    contactTab.appendChild(contactLink);


    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);

    const homeContainer = loadHome();

    mainDiv.appendChild(homeContainer);

    tabDiv.appendChild(tabs);

    // body.appendChild(tabDiv);
    // body.appendChild(mainDiv);
    body.append(tabDiv, mainDiv);
}