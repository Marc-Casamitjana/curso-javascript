var list = {
    tag: 'ul', children: [
        { tag: 'li', children: ['foo'] },
        { tag: 'li', children: ['bar'] },
        {
            tag: 'li', children: ['qux',
                {
                    tag: 'ol', children: [
                        { tag: 'li', children: ['foo'] },
                        { tag: 'li', children: ['bar'] },
                        { tag: 'li', children: ['qux'] },
                    ]
                }
            ]
        }
    ]
};

function buildList(list) {
    list.children = list.children.map(e => {
        if (isStr(e)) {
            return tag(e);
        } else {
            return buildList(e);
        }
    });
    return `<${list.tag}>${list.children.join('')}</${list.tag}>`;
}

function tag(itemList) {
    if (itemList.children) {
        return `<${itemList.tag}>${itemList.children[0]}</${itemList.tag}>`;
    } else {
        return itemList;
    }
}


function isStr(element) {
    if (typeof element === 'string' | element.children === 'string') {
        return true;
    } else {
        return element.children.length === 1;
    }
}


console.log(buildList(list));
