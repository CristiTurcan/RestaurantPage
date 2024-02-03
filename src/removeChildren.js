function removeAllChilren (node) {
    while(node.firstChild) {
        node.removeChild(node.lastChild);
    }
}

export default removeAllChilren;