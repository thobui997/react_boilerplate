const ranges = [
	{ divider: 1e18, suffix: 'E' },
	{ divider: 1e15, suffix: 'P' },
	{ divider: 1e12, suffix: 'T' },
	{ divider: 1e9, suffix: 'G' },
	{ divider: 1e6, suffix: 'M' },
	{ divider: 1e3, suffix: 'K' },
];
const formatNumberWithSuffix = (value: any) => {
	for (let i = 0; i < ranges.length; i++) {
		if (+value >= ranges[i].divider) {
			return (+value / ranges[i].divider).toString() + ranges[i].suffix;
		}
	}
	return value;
};
export default formatNumberWithSuffix;
