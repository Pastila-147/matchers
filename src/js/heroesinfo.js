export default function sortHeroes(array) {
  return array.sort((a, b) => b.health - a.health);
}