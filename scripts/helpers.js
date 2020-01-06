export function generateSpread(start, end, steps) {
	let spread = [start];
	const gap = ((start - end ) / (steps + 1)) * -1;
	// console.log(`${start}, ${end} -> ${start-end} / ${steps + 1}`);
	for (let i = 1; i <= steps; i++) {
		spread.push(Math.round(start + (gap * i)));
	}
	spread.push(end);
	return spread;
}

export function roundToClosest(num, options = [0, 100], roundDown = true) {
	if (num === undefined || typeof(num) !== 'number') return false;
	if (options.length === 1) return options[0];

	let minDistance = Infinity;
	let closest = false;
    for (let i = 0; i < options.length; i++) {
		let dist = Math.abs(num - options[i]);
		// console.log(`${minDistance} ${dist} ${closest} ${options[i]}`);
		if (dist < minDistance) {
			closest = options[i];
			minDistance = dist;
		} else if (dist === minDistance) {
			if (roundDown && options[i] < closest) {
				closest = options[i];
			} else if (!roundDown && options[i] > closest) {
				closest = options[i];
			}
		}
	}
	return closest;
}

// module.exports = {
// 	roundToClosest: roundToClosest,
// };
