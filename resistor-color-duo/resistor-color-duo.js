

export const colorCode = (color) => {
  return COLORS.indexOf(color);
};

export const decodedValue = (colors) => {
  const [first, second] = colors;

  return 10 * colorCode(first) + colorCode(second);
};

export const COLORS = [
	'black', 
	'brown', 
	'red', 
	'orange', 
	'yellow', 
	'green', 
	'blue', 
	'violet', 
	'grey', 
	'white'
];