
export default function loadContact() {
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