
const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
};

function main(MyCar) {
//Only change code below this line
const {cylinders, size} =MY_CAR;
return {
    cylinders, 
    size
}
//Only change code below this line
};


console.log(main(MY_CAR));
module.exportS = main;