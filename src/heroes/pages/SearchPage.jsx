import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q } = queryString.parse(location.search);

  let heroes = [];
  if (q) heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    // Añadimos el search a la url
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Busca un Heroe</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Búsqueda</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Busca un heroe"
              className="form-control"
              name="searchText"
              autoComplete="false"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q == null && heroes.length == 0 && (
            <div className="alert alert-primary">Buscar a un heroe</div>
          )}

          {q && heroes.length == 0 && (
            <div className="alert alert-danger">No hay resultados para {q}</div>
          )}

          {heroes &&
            heroes.length > 0 &&
            heroes.map((hero) => <HeroCard key={hero.id} {...hero} />)}
        </div>
      </div>
    </>
  );
};
