var list = {
    type: 'ul',
    value: [
        { type: 'li', value: 'foo' },
        { type: 'li', value: [
            { type: 'li', value: 'baz'}
        ] },
    ]
}

function buildList(list) {
    let result='';
    if (Array.isArray(list.value)) {
        list.value.forEach(function (e) {
            if (e.type === 'li') {
                result += '<li>' + e.value + '</li>'
            }else{
                buildList(e);
            }
        });
            return '<ul>'+result+'</ul>';
    }
    return list;
}

console.log(buildList(list));