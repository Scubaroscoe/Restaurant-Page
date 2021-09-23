/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });

function loadContact() {
    const returnedDiv = document.createElement('div');
    const topDiv = document.createElement('div');
    const bottomDiv = document.createElement('div');
    bottomDiv.id = "bot-div";

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "Contact Us";

    const contactPara = document.createElement('p');
    contactPara.textContent = "Send us a message and we'll get back to you as soon as possible. You can also reach us by phone at (321) 123-2345. Looking forward to hearing from you!";

    topDiv.appendChild(contactHeader);
    topDiv.appendChild(contactPara);

    const nameInput = document.createElement('input');
    nameInput.placeholder = "Name";
    const emailInput = document.createElement('input');
    emailInput.placeholder = "Email";
    const phoneInput = document.createElement('input');
    phoneInput.placeholder = "Phone Number";
    // const reasonInput = document.createElement('select');
    // reasonInput.placeholder = "What are you getting in touch about?";
    const messageInput = document.createElement('textarea');
    messageInput.placeholder = "Your Message";
    const submitButton = document.createElement('button');
    submitButton.textContent = "Submit";
    submitButton.style.cssText = "width:150px;border-radius:5px;margin:auto;background:antiquewhite"

    // bottomDiv.appendChild(nameInput);
    // bottomDiv.appendChild(emailInput);
    // bottomDiv.appendChild(phoneInput);
    // // bottomDiv.appendChild(reasonInput);
    // bottomDiv.appendChild(messageInput);
    // bottomDiv.appendChild(submitButton);

    bottomDiv.append(nameInput, emailInput, phoneInput, messageInput, submitButton);
    // The above isn't supported by some browsers, but I think will work on all the common ones.

    // returnedDiv.appendChild(topDiv);
    // returnedDiv.appendChild(bottomDiv);

    returnedDiv.append(topDiv, bottomDiv);

    return returnedDiv;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _tater_tots_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tater_tots.jpg */ "./src/tater_tots.jpg");


function loadHome() {
    const container = document.createElement('div');

    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "Tony's Tots";

    // const mainImg = document.createElement('img');
    const mainImg = new Image();
    mainImg.src = _tater_tots_jpg__WEBPACK_IMPORTED_MODULE_0__;

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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _buffalo_ranch_tots_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffalo_ranch_tots.jpg */ "./src/buffalo_ranch_tots.jpg");
/* harmony import */ var _grilled_cheese_waffle_tots_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grilled_cheese_waffle_tots.jpg */ "./src/grilled_cheese_waffle_tots.jpg");
/* harmony import */ var _jalapeno_tots_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jalapeno_tots.jpg */ "./src/jalapeno_tots.jpg");
/* harmony import */ var _kabob_tots_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kabob_tots.jpg */ "./src/kabob_tots.jpg");
/* harmony import */ var _loaded_tots_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loaded_tots.jpg */ "./src/loaded_tots.jpg");
/* harmony import */ var _vegan_tots_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vegan_tots.jpg */ "./src/vegan_tots.jpg");








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

function loadMenu() {
    const retDiv = document.createElement('div');

    const buffDesc = "Tater tots slathered in buffalo ranch sauce, sprinkled with blue cheese."
    const buffItem = menuItem("Buffalo Ranch Tots", _buffalo_ranch_tots_jpg__WEBPACK_IMPORTED_MODULE_0__, 10, buffDesc);

    const waffleDesc = "Waffle shaped tots, stacked on grilled cheese, bacon, and chives."
    const waffleItem = menuItem("Grilled Cheese Waffle Tots", _grilled_cheese_waffle_tots_jpg__WEBPACK_IMPORTED_MODULE_1__, 11, waffleDesc);

    const jalapenoDesc = "Classic tater tots with jalapeno, and cheese.";
    const jalapenoItem = menuItem("Jalapeno Tots", _jalapeno_tots_jpg__WEBPACK_IMPORTED_MODULE_2__, 9, jalapenoDesc);

    const kabobDesc = "Tater tots kabob style! Tots skewered with various spices and a sour cream drizzle.";
    const kabobItem = menuItem("Kabob Tots", _kabob_tots_jpg__WEBPACK_IMPORTED_MODULE_3__, 10, kabobDesc);

    const loadedDesc = "Tater tots with sour cream, chives, cheese and bacon.";
    const loadedItem = menuItem("Loaded Tots", _loaded_tots_jpg__WEBPACK_IMPORTED_MODULE_4__, 12, loadedDesc);

    const veganDesc = "Vegan tator tots!";
    const veganItem = menuItem("Grilled Cheese Waffle Tots", _vegan_tots_jpg__WEBPACK_IMPORTED_MODULE_5__, 11, veganDesc);

    retDiv.append(buffItem, waffleItem, jalapenoItem, kabobItem, loadedItem, veganItem);
    retDiv.style.cssText = "display:flex;flex-wrap:wrap;"

    return retDiv;
}

/***/ }),

/***/ "./src/buffalo_ranch_tots.jpg":
/*!************************************!*\
  !*** ./src/buffalo_ranch_tots.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f851e64152ea386eefe4.jpg";

/***/ }),

/***/ "./src/grilled_cheese_waffle_tots.jpg":
/*!********************************************!*\
  !*** ./src/grilled_cheese_waffle_tots.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3153a54f9c9aef2c2db.jpg";

/***/ }),

/***/ "./src/jalapeno_tots.jpg":
/*!*******************************!*\
  !*** ./src/jalapeno_tots.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcd317cb6a467dd1d499.jpg";

/***/ }),

/***/ "./src/kabob_tots.jpg":
/*!****************************!*\
  !*** ./src/kabob_tots.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "834926d3ce5a2c9558a2.jpg";

/***/ }),

/***/ "./src/loaded_tots.jpg":
/*!*****************************!*\
  !*** ./src/loaded_tots.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9da7e2216d27e5c270e6.jpg";

/***/ }),

/***/ "./src/tater_tots.jpg":
/*!****************************!*\
  !*** ./src/tater_tots.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0718d2090e32f0f35c9b.jpg";

/***/ }),

/***/ "./src/vegan_tots.jpg":
/*!****************************!*\
  !*** ./src/vegan_tots.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6ab1888bde4e820cbe9.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
// import './style.css';
// import totImg from './tater_tots.jpg';




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

function loadPage() {
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
        mainDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
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
        mainDiv.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    });
    menuTab.appendChild(menuLink);


    const contactTab = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.innerHTML = "Contact";
    // contactLink.addEventListener("click", handleTabClick);
    contactLink.addEventListener("click", (e) => {
        // console.log(`this is: ${this} and e.target is: ${e.target}`);
        clearElement(mainDiv);
        mainDiv.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });
    contactTab.appendChild(contactLink);


    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);

    const homeContainer = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    mainDiv.appendChild(homeContainer);

    tabDiv.appendChild(tabs);

    // body.appendChild(tabDiv);
    // body.appendChild(mainDiv);
    body.append(tabDiv, mainDiv);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCByZXR1cm5lZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvdHRvbURpdi5pZCA9IFwiYm90LWRpdlwiO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuXG4gICAgY29uc3QgY29udGFjdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdFBhcmEudGV4dENvbnRlbnQgPSBcIlNlbmQgdXMgYSBtZXNzYWdlIGFuZCB3ZSdsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS4gWW91IGNhbiBhbHNvIHJlYWNoIHVzIGJ5IHBob25lIGF0ICgzMjEpIDEyMy0yMzQ1LiBMb29raW5nIGZvcndhcmQgdG8gaGVhcmluZyBmcm9tIHlvdSFcIjtcblxuICAgIHRvcERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgICB0b3BEaXYuYXBwZW5kQ2hpbGQoY29udGFjdFBhcmEpO1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5hbWVcIjtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbWFpbElucHV0LnBsYWNlaG9sZGVyID0gXCJFbWFpbFwiO1xuICAgIGNvbnN0IHBob25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHBob25lSW5wdXQucGxhY2Vob2xkZXIgPSBcIlBob25lIE51bWJlclwiO1xuICAgIC8vIGNvbnN0IHJlYXNvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgLy8gcmVhc29uSW5wdXQucGxhY2Vob2xkZXIgPSBcIldoYXQgYXJlIHlvdSBnZXR0aW5nIGluIHRvdWNoIGFib3V0P1wiO1xuICAgIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbWVzc2FnZUlucHV0LnBsYWNlaG9sZGVyID0gXCJZb3VyIE1lc3NhZ2VcIjtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gXCJ3aWR0aDoxNTBweDtib3JkZXItcmFkaXVzOjVweDttYXJnaW46YXV0bztiYWNrZ3JvdW5kOmFudGlxdWV3aGl0ZVwiXG5cbiAgICAvLyBib3R0b21EaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAvLyBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgLy8gYm90dG9tRGl2LmFwcGVuZENoaWxkKHBob25lSW5wdXQpO1xuICAgIC8vIC8vIGJvdHRvbURpdi5hcHBlbmRDaGlsZChyZWFzb25JbnB1dCk7XG4gICAgLy8gYm90dG9tRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG4gICAgLy8gYm90dG9tRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICBib3R0b21EaXYuYXBwZW5kKG5hbWVJbnB1dCwgZW1haWxJbnB1dCwgcGhvbmVJbnB1dCwgbWVzc2FnZUlucHV0LCBzdWJtaXRCdXR0b24pO1xuICAgIC8vIFRoZSBhYm92ZSBpc24ndCBzdXBwb3J0ZWQgYnkgc29tZSBicm93c2VycywgYnV0IEkgdGhpbmsgd2lsbCB3b3JrIG9uIGFsbCB0aGUgY29tbW9uIG9uZXMuXG5cbiAgICAvLyByZXR1cm5lZERpdi5hcHBlbmRDaGlsZCh0b3BEaXYpO1xuICAgIC8vIHJldHVybmVkRGl2LmFwcGVuZENoaWxkKGJvdHRvbURpdik7XG5cbiAgICByZXR1cm5lZERpdi5hcHBlbmQodG9wRGl2LCBib3R0b21EaXYpO1xuXG4gICAgcmV0dXJuIHJldHVybmVkRGl2O1xufSIsImltcG9ydCB0b3RJbWcgZnJvbSAnLi90YXRlcl90b3RzLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiVG9ueSdzIFRvdHNcIjtcblxuICAgIC8vIGNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBtYWluSW1nID0gbmV3IEltYWdlKCk7XG4gICAgbWFpbkltZy5zcmMgPSB0b3RJbWc7XG5cbiAgICBjb25zdCBtYWluQ29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtYWluQ29weS5pbm5lckhUTUwgPSBgSGF2ZSB5b3UgZXZlciBoYWQgTWljaGVsaW4gc3RhciBxdWFsaXR5IGN1aXNpbmU/IFdlbGwgXG4gICAgeW91J3JlIGluIGZvciBhIHRyZWF0IGFzIFRvbnkncyBUb3RzIGlzIGEgcGVudHVwbGUgTWljaGVsaW4gc3RhciByZXN0YXVyYW50ISBcbiAgICAke1wiRGlzY2xhaW1lcjogVG9ueSdzIFRvdHMgZG9lcyBub3QgaGF2ZSBhbnkgTWljaGVsaW4gc3RhcnMuLi5cIi5pdGFsaWNzKCl9YFxuXG4gICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluSW1nKTtcbiAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvcHkpO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmQobWFpbkhlYWRlciwgbWFpbkltZywgbWFpbkNvcHkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJpbXBvcnQgYnVmZkltZyBmcm9tICcuL2J1ZmZhbG9fcmFuY2hfdG90cy5qcGcnO1xuaW1wb3J0IHdhZmZsZUltZyBmcm9tICcuL2dyaWxsZWRfY2hlZXNlX3dhZmZsZV90b3RzLmpwZyc7XG5pbXBvcnQgamFsYXBlbm9JbWcgZnJvbSAnLi9qYWxhcGVub190b3RzLmpwZyc7XG5pbXBvcnQga2Fib2JJbWcgZnJvbSAnLi9rYWJvYl90b3RzLmpwZyc7XG5pbXBvcnQgbG9hZGVkSW1nIGZyb20gJy4vbG9hZGVkX3RvdHMuanBnJztcbmltcG9ydCB2ZWdhbkltZyBmcm9tICcuL3ZlZ2FuX3RvdHMuanBnJztcblxuXG5mdW5jdGlvbiBtZW51SXRlbShuYW1lLCBwaWMsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtZGl2Jyk7XG5cbiAgICBjb25zdCBpdGVtUGljID0gbmV3IEltYWdlKCk7XG4gICAgaXRlbVBpYy5zcmMgPSBwaWM7XG4gICAgaXRlbVBpYy5jbGFzc0xpc3QuYWRkKCdtZW51LWltZycpO1xuXG4gICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbVRleHQuaW5uZXJIVE1MID0gYCR7bmFtZX0gKFxcJCR7cHJpY2V9KTpcXHJcXG4ke2Rlc2NyaXB0aW9ufWA7XG4gICAgaXRlbVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudS10eHQnKTtcblxuICAgIG1lbnVEaXYuYXBwZW5kKGl0ZW1QaWMsIGl0ZW1UZXh0KTtcblxuICAgIHJldHVybiBtZW51RGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCByZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGJ1ZmZEZXNjID0gXCJUYXRlciB0b3RzIHNsYXRoZXJlZCBpbiBidWZmYWxvIHJhbmNoIHNhdWNlLCBzcHJpbmtsZWQgd2l0aCBibHVlIGNoZWVzZS5cIlxuICAgIGNvbnN0IGJ1ZmZJdGVtID0gbWVudUl0ZW0oXCJCdWZmYWxvIFJhbmNoIFRvdHNcIiwgYnVmZkltZywgMTAsIGJ1ZmZEZXNjKTtcblxuICAgIGNvbnN0IHdhZmZsZURlc2MgPSBcIldhZmZsZSBzaGFwZWQgdG90cywgc3RhY2tlZCBvbiBncmlsbGVkIGNoZWVzZSwgYmFjb24sIGFuZCBjaGl2ZXMuXCJcbiAgICBjb25zdCB3YWZmbGVJdGVtID0gbWVudUl0ZW0oXCJHcmlsbGVkIENoZWVzZSBXYWZmbGUgVG90c1wiLCB3YWZmbGVJbWcsIDExLCB3YWZmbGVEZXNjKTtcblxuICAgIGNvbnN0IGphbGFwZW5vRGVzYyA9IFwiQ2xhc3NpYyB0YXRlciB0b3RzIHdpdGggamFsYXBlbm8sIGFuZCBjaGVlc2UuXCI7XG4gICAgY29uc3QgamFsYXBlbm9JdGVtID0gbWVudUl0ZW0oXCJKYWxhcGVubyBUb3RzXCIsIGphbGFwZW5vSW1nLCA5LCBqYWxhcGVub0Rlc2MpO1xuXG4gICAgY29uc3Qga2Fib2JEZXNjID0gXCJUYXRlciB0b3RzIGthYm9iIHN0eWxlISBUb3RzIHNrZXdlcmVkIHdpdGggdmFyaW91cyBzcGljZXMgYW5kIGEgc291ciBjcmVhbSBkcml6emxlLlwiO1xuICAgIGNvbnN0IGthYm9iSXRlbSA9IG1lbnVJdGVtKFwiS2Fib2IgVG90c1wiLCBrYWJvYkltZywgMTAsIGthYm9iRGVzYyk7XG5cbiAgICBjb25zdCBsb2FkZWREZXNjID0gXCJUYXRlciB0b3RzIHdpdGggc291ciBjcmVhbSwgY2hpdmVzLCBjaGVlc2UgYW5kIGJhY29uLlwiO1xuICAgIGNvbnN0IGxvYWRlZEl0ZW0gPSBtZW51SXRlbShcIkxvYWRlZCBUb3RzXCIsIGxvYWRlZEltZywgMTIsIGxvYWRlZERlc2MpO1xuXG4gICAgY29uc3QgdmVnYW5EZXNjID0gXCJWZWdhbiB0YXRvciB0b3RzIVwiO1xuICAgIGNvbnN0IHZlZ2FuSXRlbSA9IG1lbnVJdGVtKFwiR3JpbGxlZCBDaGVlc2UgV2FmZmxlIFRvdHNcIiwgdmVnYW5JbWcsIDExLCB2ZWdhbkRlc2MpO1xuXG4gICAgcmV0RGl2LmFwcGVuZChidWZmSXRlbSwgd2FmZmxlSXRlbSwgamFsYXBlbm9JdGVtLCBrYWJvYkl0ZW0sIGxvYWRlZEl0ZW0sIHZlZ2FuSXRlbSk7XG4gICAgcmV0RGl2LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtcIlxuXG4gICAgcmV0dXJuIHJldERpdjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCB0b3RJbWcgZnJvbSAnLi90YXRlcl90b3RzLmpwZyc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS5qcyc7XG5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbCkge1xuICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiBoYW5kbGVUYWJDbGljayhlKSB7XG4vLyAgICAgY29uc29sZS5sb2coYHRoaXMgaXM6ICR7dGhpc30gYW5kIGUudGFyZ2V0IGlzOiAke2UudGFyZ2V0fWApO1xuLy8gICAgIGNsZWFyRWxlbWVudChtYWluRGl2KTtcbi8vICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgdGFiRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFiRGl2LmlkID0gJ3RhYi1kaXYnO1xuXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaG9tZUxpbmsuaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGlzIGlzOiAke3RoaXN9IGFuZCBlLnRhcmdldCBpczogJHtlLnRhcmdldH1gKTtcbiAgICAgICAgY2xlYXJFbGVtZW50KG1haW5EaXYpO1xuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xuICAgIH0pO1xuICAgIC8vIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYWJDbGljayk7XG4gICAgaG9tZVRhYi5hcHBlbmRDaGlsZChob21lTGluayk7XG5cblxuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG1lbnVMaW5rLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIC8vIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYWJDbGljayk7XG4gICAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGlzIGlzOiAke3RoaXN9IGFuZCBlLnRhcmdldCBpczogJHtlLnRhcmdldH1gKTtcbiAgICAgICAgY2xlYXJFbGVtZW50KG1haW5EaXYpO1xuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGxvYWRNZW51KCkpO1xuICAgIH0pO1xuICAgIG1lbnVUYWIuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuXG5cbiAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWN0TGluay5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgICAvLyBjb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFiQ2xpY2spO1xuICAgIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgdGhpcyBpczogJHt0aGlzfSBhbmQgZS50YXJnZXQgaXM6ICR7ZS50YXJnZXR9YCk7XG4gICAgICAgIGNsZWFyRWxlbWVudChtYWluRGl2KTtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChsb2FkQ29udGFjdCgpKTtcbiAgICB9KTtcbiAgICBjb250YWN0VGFiLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcblxuXG4gICAgdGFicy5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICB0YWJzLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gbG9hZEhvbWUoKTtcblxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbiAgICB0YWJEaXYuYXBwZW5kQ2hpbGQodGFicyk7XG5cbiAgICAvLyBib2R5LmFwcGVuZENoaWxkKHRhYkRpdik7XG4gICAgLy8gYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICBib2R5LmFwcGVuZCh0YWJEaXYsIG1haW5EaXYpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==