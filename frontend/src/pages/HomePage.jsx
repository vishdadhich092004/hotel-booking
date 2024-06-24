import PopularDestinations from "../components/PopularDestinations";
import SearchForm from "../components/SearchForm";
import PromoBar from "../components/PromoBar";
export default function HomePage() {
  return (
    <>
      <SearchForm />
      <PromoBar />
      <PopularDestinations />
    </>
  );
}
