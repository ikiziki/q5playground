function createRules(speciesCount, defaultValue = 0) {
	let species = Array.from(
		{ length: speciesCount },
		(_, index) => String.fromCharCode(65 + index)
	);

	return Object.fromEntries(
		species.flatMap(source =>
			species.map(target => [
				source + target,
				typeof defaultValue === "function" ? defaultValue() : defaultValue
		])
		)
	);
}

let rules = createRules(7);
let defaultRules = { ...rules };
