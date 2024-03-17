const pathLevel = "../..";

const charmanderData = {
  name: "Charmander",
  image: require(`${pathLevel}/assets/charmander.png`),
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Growl", "Leer"],
  weaknesses: ["Water", "Rock"],
};

const bulbasaurData = {
  name: "Bulbasaur",
  image: require(`${pathLevel}/assets/bulbasaur.png`),
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
};

export { charmanderData, bulbasaurData };
