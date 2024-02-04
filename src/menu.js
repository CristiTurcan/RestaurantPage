function loadMenu (content) {
    const container = document.createElement('div');
    container.classList.add('container');

    const item = document.createElement('div');
    item.textContent = 'Pizza is good';

    const item2 = document.createElement('div');
    item2.textContent = 'Paste is good';

    const item3 = document.createElement('div');
    item3.textContent = 'Cheese is good';

    container.appendChild(item);
    container.appendChild(item2);
    container.appendChild(item3);

    content.appendChild(container);
}

export default loadMenu;