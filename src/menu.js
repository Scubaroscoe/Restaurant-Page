import buffImg from './buffalo_ranch_tots.jpg';
import waffleImg from './grilled_cheese_waffle_tots.jpg';
import jalapenoImg from './jalapeno_tots.jpg';
import kabobImg from './kabob_tots.jpg';
import loadedImg from './loaded_tots.jpg';
import veganImg from './vegan_tots.jpg';


function menuItem(name, pic, price, description) {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    const itemPic = new Image();
    itemPic.src = pic;
    itemPic.classList.add('menu-img');

    const itemText = document.createElement('p');
    itemText.innerHTML = `${name} (\$${price}):\r\n${description}`;
    itemText.classList.add('menu-txt');

    menuDiv.append(itemPic, itemText);

    return menuDiv;
}

export default function loadMenu() {
    const retDiv = document.createElement('div');

    const buffDesc = "Tater tots slathered in buffalo ranch sauce, sprinkled with blue cheese."
    const buffItem = menuItem("Buffalo Ranch Tots", buffImg, 10, buffDesc);

    const waffleDesc = "Waffle shaped tots, stacked on grilled cheese, bacon, and chives."
    const waffleItem = menuItem("Grilled Cheese Waffle Tots", waffleImg, 11, waffleDesc);

    const jalapenoDesc = "Classic tater tots with jalapeno, and cheese.";
    const jalapenoItem = menuItem("Jalapeno Tots", jalapenoImg, 9, jalapenoDesc);

    const kabobDesc = "Tater tots kabob style! Tots skewered with various spices and a sour cream drizzle.";
    const kabobItem = menuItem("Kabob Tots", kabobImg, 10, kabobDesc);

    const loadedDesc = "Tater tots with sour cream, chives, cheese and bacon.";
    const loadedItem = menuItem("Loaded Tots", loadedImg, 12, loadedDesc);

    const veganDesc = "Vegan tator tots!";
    const veganItem = menuItem("Grilled Cheese Waffle Tots", veganImg, 11, veganDesc);

    retDiv.append(buffItem, waffleItem, jalapenoItem, kabobItem, loadedItem, veganItem);
    retDiv.style.cssText = "display:flex;flex-wrap:wrap;"

    return retDiv;
}