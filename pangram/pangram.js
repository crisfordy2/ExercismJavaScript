

export const isPangram = (string) => {
  let unique = new Set(string.toLowerCase().split("").filter(char => char.match(/[a-z]/)))
  return unique.size === 26
};