
const earthSecondsPerYear = 31557600;
const orbitals = {
  'earth': 1,
  'jupiter': 11.862615,
  'mars': 1.8808158,
  'mercury': 0.2408467,
  'neptune': 164.79132,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'venus':  0.61519726,
}

export const age = (planet, ageInSeconds) => +(ageInSeconds / (orbitals[planet] * earthSecondsPerYear)).toFixed(2);