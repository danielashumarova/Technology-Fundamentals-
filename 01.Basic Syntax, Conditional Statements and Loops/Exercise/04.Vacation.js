function solve(group, type, dayOfWeek) {

    let totalPrice = 0;
    if (type === "Students") {
        if (group >= 30) {
            if (dayOfWeek === "Friday") {
                totalPrice = (8.45 * group) * 0.85;
            } else if (dayOfWeek === "Saturday") {
                totalPrice = (9.8 * group) * 0.85;
            } else if (dayOfWeek === "Sunday") {
                totalPrice = (10.46 * group) * 0.85;
            }
        } else {
            if (dayOfWeek === "Friday") {
                totalPrice = 8.45 * group;
            } else if (dayOfWeek === "Saturday") {
                totalPrice = 9.8 * group;
            } else if (dayOfWeek === "Sunday") {
                totalPrice = 10.46 * group;
            }
        }
    }

    if (type === "Business") {
        if (group >= 100) {
            if (dayOfWeek === "Friday") {
                totalPrice = (10.9 * group) - (10 * 10.9);
            } else if (dayOfWeek === "Saturday") {
                totalPrice = (15.6 * group) - (10 * 15.6);
            } else if (dayOfWeek === "Sunday") {
                totalPrice = (16 * group) - (10 * 16);
            }
        } else {
            if (dayOfWeek === "Friday") {
                totalPrice = 10.9 * group;
            } else if (dayOfWeek === "Saturday") {
                totalPrice = 15.6 * group;
            } else if (dayOfWeek === "Sunday") {
                totalPrice = 16 * group;
            }
        }
    }
    if (type === "Regular") {
        if (group >= 10 && group <= 20) {
            if (dayOfWeek === "Friday") {
                totalPrice = (15 * group) * 0.95;
            } else if (dayOfWeek === "Saturday") {
                totalPrice = (20 * group) * 0.95;
            } else if (dayOfWeek === "Sunday") {
                totalPrice = (22.5 * group) * 0.95;
            }
        } else {
            if (dayOfWeek === "Friday") {
                totalPrice = 15 * group;
            } else if (dayOfWeek === "Saturday") {
                totalPrice = 20 * group;
            } else if (dayOfWeek === "Sunday") {
                totalPrice = 22.5 * group;
            }
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

//solve(40, "Regular", "Saturday");