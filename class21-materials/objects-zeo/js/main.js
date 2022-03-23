//Create a stopwatch object that has four properties and three methods
let stopWatch = {};

stopWatch.currentTime = 9;
stopWatch.startTime = 0;
stopWatch.endTime = 99;
stopWatch.bestTime = 420;

stopWatch.start = function() {
    console.log(`${stopWatch.startTime}`);
}

stopWatch.end = function() {
    console.log(`Ending time at ${stopWatch.endTime}`);
}

let watch = {
    currentTime: 420,
    lastTime: 69,
}