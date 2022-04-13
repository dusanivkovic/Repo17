let foo =12, boo = 45;

function main(foo, boo) {
//Only change code below this line
    [foo, boo] = [boo, foo];
    return {
        foo,
        boo
    }

//Only change code below this line
};


console.log(main(foo, boo));
module.exportS = main;