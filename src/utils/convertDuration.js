export function convertDuration(duration) {
	const minutes = parseInt(duration);
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	const formattedTime = `${hours}ч ${remainingMinutes}м`;
	return formattedTime;
}
