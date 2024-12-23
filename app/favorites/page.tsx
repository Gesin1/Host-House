import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavorites } from "@/utils/actions";

async function FavoritesPage() {
  const Favorites = await fetchFavorites();

  if (Favorites.length === 0) {
    return <EmptyList />;
  }
  return <PropertiesList properties={Favorites} />;
}
export default FavoritesPage;
