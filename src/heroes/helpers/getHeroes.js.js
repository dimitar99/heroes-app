import heroes from "../data/heroes";

export const getHeroes = (publisher) => {
  let listOfHeroes = heroes;

  if (publisher)
    listOfHeroes = heroes.filter((hero) => hero.publisher === publisher);

  return listOfHeroes;
};
