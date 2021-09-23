import totImg from './tater_tots.jpg';

export default function loadHome() {
    const container = document.createElement('div');

    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "Tony's Tots";

    // const mainImg = document.createElement('img');
    const mainImg = new Image();
    mainImg.src = totImg;

    const mainCopy = document.createElement('p');
    mainCopy.innerHTML = `Have you ever had Michelin star quality cuisine? Well 
    you're in for a treat as Tony's Tots is a pentuple Michelin star restaurant! 
    ${"Disclaimer: Tony's Tots does not have any Michelin stars...".italics()}`

    // container.appendChild(mainHeader);
    // container.appendChild(mainImg);
    // container.appendChild(mainCopy);
    
    container.append(mainHeader, mainImg, mainCopy);

    return container;
}