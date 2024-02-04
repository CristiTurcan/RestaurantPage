function loadHome (content) {
    const container = document.createElement('div');
    container.classList.add("container");

    const title = document.createElement('span');
    title.textContent = 'The best Italian food in the whole city!';

    container.appendChild(title);
    content.appendChild(container);
}

export default loadHome;
