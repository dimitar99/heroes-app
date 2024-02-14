import { HeroList } from "../components/HeroList";

export const DcPage = () => {
  return (
    <>
      <h1 className="animate__animated animate__fadeIn animate__faster">
        DC Comics
      </h1>
      <hr />
      <HeroList publisher={"DC Comics"} />
    </>
  );
};
