function loadAbout (content) {
    const title = document.createElement('h1');
    title.textContent = 'About us!';

    const text = document.createElement('div');
    text.textContent = 'We are a very good restaurant situated in the north of Miami Beach at the coast with the warm water italian cuisine and a lot of good stuff the prices are low and the chefs are amazing please come visit us and make a reservation at 0744 123 433 we are open 12-12';

    content.appendChild(title);
    content.appendChild(text);
}

export default loadAbout;