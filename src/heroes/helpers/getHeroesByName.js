import heroes from "../data/heroes";

export const getHeroesByName = (name = "") => {
  if (name.length === 0) return [];

  const deleteWhiteSpaces = (value) => value.replace(/\s/g, "");

  name = deleteWhiteSpaces(name.toLocaleLowerCase());

  return heroes.filter((hero) =>
    deleteWhiteSpaces(hero.superhero.toLocaleLowerCase()).includes(name)
  );
};
