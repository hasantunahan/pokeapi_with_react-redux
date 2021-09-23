import HomeView from "../ui/features/home/home";
import PokeDetails from "../ui/features/pokemondetail/view/pokedetails";
import SplashView from "../ui/start/splashview/view/splashview";
import HomeNavigation from "../ui/start/_mainbottom/mainbottomnavigation";

export const navigationList = {
  Splash: SplashView,
  HomeNavigation : HomeNavigation,
  Home: HomeView,
  PokeDetail: PokeDetails
};
