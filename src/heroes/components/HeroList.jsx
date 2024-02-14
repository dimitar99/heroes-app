import { getHeroes } from "../helpers/getHeroes.js";
import PropTypes from "prop-types";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  const listOfHeroes = useMemo(() => getHeroes(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {listOfHeroes && listOfHeroes.length > 0 ? (
        listOfHeroes.map((hero) => <HeroCard key={hero.id} {...hero} />)
      ) : (
        <p>No hay heroes</p>
      )}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string,
};
