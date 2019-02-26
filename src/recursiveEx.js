const params = {
    foo: 'abc',
    bar: 'bar',
    qux: {
        y: '123',
        x: '987',
        y: [1,
            2,
            'aa',
            {x : 1}]
    }
}

function aplanate(obj){
    
}

/* {
foo: 'abc',
bar: 'bar',
qux.y: '123',
qux.x: '123',
"qux.y[0]" : 1
"qux.y[1]" : 2
"qux.y[2]" : 'aa'
"qux.y[3].x: 1,

/* }

function aplanate(){
    if()
}