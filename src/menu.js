function loadMenu (content) {
    const title = document.createElement('h1')
    title.textContent = 'Menu';

    const item = document.createElement('div');
    item.textContent = 'Pizza is good';

    const item2 = document.createElement('div');
    item2.textContent = 'Paste is good';

    const item3 = document.createElement('div');
    item3.textContent = 'Cheese is good';

    content.appendChild(title);
    content.appendChild(item);
    content.appendChild(item2);
    content.appendChild(item3);
}

export default loadMenu;