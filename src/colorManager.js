function addColor (...args) {
    args.forEach((arg) => {
        arg.style.color = 'white';
    });
}

function removeColor (...args) {
    args.forEach((arg) => {
        arg.style.color = '';
    });
}

export {addColor, removeColor};