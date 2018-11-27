function solve(distance, passenger, literDieselPrice) {

    let literPerPersons = 0.1 * passenger;  //add liter up to litterDiesel

    let fuel = (distance / 100) * 7 + literPerPersons;
    let money = literDieselPrice * fuel;
    console.log(`Needed money for that trip is ${money}lv.`);
}

//solve(260,9,2.49)
//solve(90,14,2.88)