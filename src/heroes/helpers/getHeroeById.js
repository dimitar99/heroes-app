import heroes from "../data/heroes.json";

export const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);
