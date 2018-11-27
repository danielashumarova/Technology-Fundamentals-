function solve(bandName, albumName, songName) {

    let songDudation = (albumName.length * bandName.length) * songName.length / 2;
    let times = Math.ceil(songDudation / 2.5);

    console.log(`The plate was rotated ${times} times.`);
}

//solve('Black Sabbath', 'Paranoid', 'War Pigs')