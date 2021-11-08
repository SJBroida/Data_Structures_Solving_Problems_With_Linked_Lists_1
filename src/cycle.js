const cycle = (list) => {

    const nodeTracker = [];

    let node = list.head;
    nodeTracker.push(node);

    while(node) {
        if(nodeTracker.includes(node.next)) {
            return true;
        }
        node = node.next;
        nodeTracker.push(node);
    }

    return false;
};

module.exports = cycle;
