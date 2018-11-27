function solve(radius, height) {

    let volume = (1 / 3) * Math.PI * (radius ** 2) * height;
    let s = (radius ** 2) + (height ** 2);
    let L = Math.PI * radius * (Math.sqrt(s));
    let B = Math.PI * (radius ** 2);

    let area = L + B;


    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}

//solve(3.3, 7.8)