//Only change code below this line
const workDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

function myWeek(...days) {
    let week = [...workDays, ...days];
    return week;
};
    //Only change code below this line
console.log(myWeek('SAT', 'SUN'));
module.exportS = myWeek;