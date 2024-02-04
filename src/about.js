function loadAbout (content) {
    const container = document.createElement('div');
    container.classList.add('container');

    const phoneNumber = document.createElement('span');
    phoneNumber.textContent = '1234 567 890';

    const address = document.createElement('span');
    address.textContent = '23rd 5th Ave, New York City, NY';    

    container.appendChild(phoneNumber);
    container.appendChild(address);
    content.appendChild(container);
}

export default loadAbout;