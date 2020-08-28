const color = 'red';
switch(color){
    case 'red':
        console.log('Red');
        break;
    case 'blue':
        console.log('Red');
        break;
    default:
        console.log('Color is not red or blue');
}

let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        console.log(day);
        break;
    case 1:
        day = 'Monday';
        console.log(day);
        break;
    case 2:
        day = 'Tuesday';
        console.log(day);
        break;
    case 3:
        day = 'Wednessday';
        console.log(day);
        break;
    case 4:
        day = 'Thusday';
        console.log(day);
        break;
    case 5:
        day = 'Friday';
        console.log(day);
        break;
    default:
        day = 'Saturday';
        console.log(day);
        break;
}