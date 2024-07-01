function timeToWalk(steps, footprint, speed) {
	let distanceInMeters = steps * footprint;
	let speedMetersInSec = speed / 3.6;
	let time = distanceInMeters / speedMetersInSec;
	let res = Math.floor(distanceInMeters / 500);
	let timeInMin = Math.floor(time / 60);
	let timeInSec = Number((time - timeInMin * 60).toFixed())
	let timeInHour = Math.floor(time / 3600);
	timeInMin += res;
	timeInHour += Math.floor(timeInMin / 60);
	timeInMin = timeInMin % 60;
	let formattedH = timeInHour < 10 ? `0${timeInHour}` : `${timeInHour}`;
	let formattedMin = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
	let formattedSec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;
	console.log(`${formattedH}:${formattedMin}:${formattedSec}`);
}
timeToWalk(4000, 0.60, 5);