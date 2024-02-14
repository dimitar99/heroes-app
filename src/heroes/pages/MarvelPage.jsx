import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
  return (
    <>
      <h1 className="animate__animated animate__fadeIn animate__faster">
        Marvel Comics
      </h1>
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </>
  );
};
